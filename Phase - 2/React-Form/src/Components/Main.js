import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      billingAdd1: "",
      billingAdd2: "",
      billingCountry: "Ind",
      billingStates: "state1",
      billingZip: "",
      shippingAdd1: "",
      shippingAdd2: "",
      shippingCountry: "Ind",
      shippingStates: "state1",
      shippingZip: "",
      payment: "",
      message: "",
    };

    this.setShippingAdd = this.setShippingAdd.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.setPayment = this.setPayment.bind(this);
  }

  changeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  changeBillAddOne = (event) => {
    this.setState({ billingAdd1: event.target.value });
  };

  changeBillAddTwo = (event) => {
    this.setState({ billingAdd2: event.target.value });
  };

  changeBillCountry = (event) => {
    this.setState({ billingCountry: event.target.value });
  };

  changeBillStates = (event) => {
    this.setState({ billingStates: event.target.value });
  };

  changeBillZip = (event) => {
    this.setState({ billingZip: event.target.value });
  };

  changeShipAddOne = (event) => {
    this.setState({ shippingAdd1: event.target.value });
  };

  changeShipAddTwo = (event) => {
    this.setState({ shippingAdd2: event.target.value });
  };

  changeShipCountry = (event) => {
    this.setState({ shippingCountry: event.target.value });
  };

  changeShipStates = (event) => {
    this.setState({ shippingStates: event.target.value });
  };

  changeShipZip = (event) => {
    this.setState({ shippingZip: event.target.value });
  };

  setShippingAdd() {
    this.setState({
      shippingAdd1: this.state.billingAdd1,
      shippingAdd2: this.state.billingAdd2,
      shippingCountry: this.state.billingCountry,
      shippingStates: this.state.billingStates,
      shippingZip: this.state.billingZip,
    });
  }

  setPayment(event) {
    this.setState({ payment: event.target.value });
  }

  changeMessage(event) {
    this.setState({ message: event.target.value });
  }
  render() {
    return (
      <div>
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h2>Checkout form</h2>
          <p className="lead">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">−$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    onChange={this.changeFirstName}
                    value={this.state.firstName}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    onChange={this.changeLastName}
                    value={this.state.lastName}
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      onChange={this.changeUserName}
                      value={this.state.userName}
                      required
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    onChange={this.changeEmail}
                    value={this.state.email}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="billaddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="billaddress"
                    placeholder="1234 Main St"
                    value={this.state.billingAdd1}
                    onChange={this.changeBillAddOne}
                  />
                  <div className="invalid-feedback">
                    Please enter your billing address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="billaddress2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="billaddress2"
                    placeholder="Apartment or suite"
                    onChange={this.changeBillAddTwo}
                    value={this.state.billingAdd2}
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="billcountry" className="form-label">
                    Country
                  </label>
                  <select
                    className="form-select"
                    id="billcountry"
                    value={this.state.billingCountry}
                    onChange={this.changeBillCountry}
                    required
                  >
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    <option value="Ind">Ind</option>
                    <option value="Pak">Pak</option>
                    <option value="Chn">Chn</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="billstate" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    id="billstate"
                    value={this.state.billingStates}
                    onChange={this.changeBillStates}
                    required
                  >
                    <option value="state1">state1</option>
                    <option value="state2">state2</option>
                    <option value="state3">state3</option>
                    <option value="state4">state4</option>
                    <option value="state5">state5</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="billzip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="billzip"
                    placeholder=""
                    required
                    onChange={this.changeBillZip}
                    value={this.state.billingZip}
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                  onChange={this.setShippingAdd}
                />
                <label className="form-check-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Shipping address</h4>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="shipaddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="shipaddress"
                    placeholder="1234 Main St"
                    onChange={this.changeShipAddOne}
                    value={this.state.shippingAdd1}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="shipaddress2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="shipaddress2"
                    placeholder="Apartment or suite"
                    onChange={this.changeShipAddTwo}
                    value={this.state.shippingAdd2}
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="shipcountry" className="form-label">
                    Country
                  </label>
                  <select
                    className="form-select"
                    id="shipcountry"
                    value={this.state.shippingCountry}
                    onChange={this.changeShipCountry}
                    required
                  >
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    <option value="Ind">Ind</option>
                    <option value="Pak">Pak</option>
                    <option value="Chn">Chn</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="shipstate" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    id="shipstate"
                    value={this.state.shippingStates}
                    onChange={this.changeShipStates}
                    required
                  >
                    <option value="state1">state1</option>
                    <option value="state2">state2</option>
                    <option value="state3">state3</option>
                    <option value="state4">state4</option>
                    <option value="state5">state5</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="shipzip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="shipzip"
                    placeholder=""
                    required
                    onChange={this.changeShipZip}
                    value={this.state.shippingZip}
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    value="Credit card"
                    onChange={this.setPayment}
                    required
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit Card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    value="Debit Card"
                    onChange={this.setPayment}
                    required
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    value="PayPal"
                    onChange={this.setPayment}
                    required
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <h4 className="mb-3">
                  <label htmlFor="message"> Message </label>
                </h4>
                <textarea
                  name="message"
                  id="message"
                  value={this.state.message}
                  onChange={this.changeMessage}
                ></textarea>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
