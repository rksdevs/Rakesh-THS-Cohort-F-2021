import { Component } from "react";
import Card from "./Card";

class CardMain extends Component {
  render() {
    return (
      <>
        <Card
          price="15"
          users="20"
          capacity="5"
          email="Email Support"
          heading="Free"
        />
        <Card
          price="25"
          users="50"
          capacity="50"
          email="Priority Email Support"
          heading="Pro"
        />
        <Card
          price="35"
          users="500"
          capacity="100"
          email="Email And Chat Support"
          heading="Enterprise"
        />
      </>
    );
  }
}

export default CardMain;
