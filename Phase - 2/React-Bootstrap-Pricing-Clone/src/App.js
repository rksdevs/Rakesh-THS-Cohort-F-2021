import React from "react";
import SomeSvg from "./Components/SomeSvg";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CardMain from "./Components/Card-Main";
import Heading from "./Components/Heading";
// import Table from "./Components/Table";

class App extends React.Component {
  render() {
    return (
      <>
        <SomeSvg />
        <div className="container py-3">
          <Navbar />
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <CardMain />
          </div>
          <Heading />
          <div className="table-responsive">{/* <Table /> */}</div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
