import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import ProductBgDark from "./Components/Product-bgDark";
import ProductBgWhite from "./Components/Product-bgWhite";
import ProductBgBlue from "./Components/Product-bgBlue";
import ProductBgGrey from "./Components/Product-bgGrey";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Hero />
          <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <ProductBgDark />
            <ProductBgWhite />
          </div>
          <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <ProductBgWhite />
            <ProductBgBlue />
          </div>
          <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <ProductBgGrey />
            <ProductBgGrey />
          </div>
          <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <ProductBgGrey />
            <ProductBgGrey />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
