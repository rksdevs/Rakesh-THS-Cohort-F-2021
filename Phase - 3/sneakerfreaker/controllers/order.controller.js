const { validationResult } = require("express-validator");
const Razorpay = require("razorpay");
const Cart = require("../models/Cart");
const DeliverySpeed = require("../models/DeliverySpeed");
const Order = require("../models/Order");
const { rzpKeyId, rzpKeySecret } = require("../config/keys");

const generateOrder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //populate the Cart schema to get all the cartItems and productStyle details

    const myCart = await Cart.findOne({ user: req.user._id }).populate({
      path: "cartItems",
      populate: { path: "productStyle" },
    }); // user cart
    // console.log(myCart.cartItems);
    const { addressId, deliverySpeedId } = req.body;

    //reducer function to get the order total
    let orderTotal = myCart.cartItems.reduce((acc, cur) => {
      return acc + cur.productStyle.discountedPrice * cur.quantity;
    }, 0);
    const delivery = await DeliverySpeed.findById(deliverySpeedId);
    if (!delivery) {
      res
        .status(400)
        .json({ errors: [{ msg: "Delivery Speed doesn't exist" }] });
    }

    //setting up the order schema

    orderTotal += delivery.price;
    const items = myCart.cartItems.map((ele) => {
      return {
        product: ele.product,
        productStyle: ele.productStyle._id,
        productSize: ele.productSize,
        quantity: ele.quantity,
        amount: ele.quantity * ele.productStyle.discountedPrice,
      };
    });
    // console.log(items);
    const generatedOrder = new Order({
      user: req.user._id,
      items,
      address: addressId,
      deliverySpeed: deliverySpeedId,
      orderTotal,
    });
    await generatedOrder.save();
    res.status(200).json({ info: "Order Generated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

const paymentOrder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      res.status(404).json({ errors: [{ msg: "Order doesn't exists" }] });
    }

    /* Check the last updated property & the current time, if difference is more than 5 mins, delete the order from the DB and show the user an error message: "Time Exceeded to fulfill Order, please checkout again"
     */

    const rzp = new Razorpay({
      key_id: rzpKeyId,
      key_secret: rzpKeySecret,
    });

    let options = {
      amount: order.orderTotal * 100,
      currency: "INR",
      receipt: id,
    };

    const rzpOrder = await rzp.orders.create(options);
    order.rzpOrderId = rzpOrder.id;
    await order.save();
    return res.status(200).json({
      info: {
        key_id: rzpKeyId,
        id: rzpOrder.id,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

const captureOrder = async (req, res) => {
  try {
    const { order_id } = req.body.payload.payment.entity;
    let order = await Order.findOne({ rzpOrderId: order_id });
    if (!order) {
      //Alert Admin About this
      //console.log(Admin please check this)
      //return res.status(200).json({status: "Ok"})
    }
    if (req.body.event === "payment.captured") {
      order.paymentStatus = "PAYMENT_SUCCESS";
    } else if (req.body.event === "payment.failed") {
      order.paymentStatus = "PAYMENT_FAILED";
    }
    order.paymentData = req.body;
    await order.save();
    res.status(200).json({ status: "Ok" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
  }
};

module.exports = { generateOrder, paymentOrder, captureOrder };
