const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users.route");
const adminRouter = require("./routes/admin/index");
// const publicRouter = require("../routes/public.route");
const publicRouter = require("./routes/public.route");
const addressRouter = require("./routes/address.route");
const cartRouter = require("./routes/cart.route");
const orderRouter = require("./routes/order.route");
const app = express();
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("uploads"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/public", publicRouter);
app.use("/cart", cartRouter);
app.use("/address", addressRouter);
app.use("/order", orderRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
