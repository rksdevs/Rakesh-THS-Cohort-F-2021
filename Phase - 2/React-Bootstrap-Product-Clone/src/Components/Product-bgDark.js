import { Component } from "react";

class ProductBgDark extends Component {
  render() {
    const boxStyle = {
      width: "80%",
      height: "300px",
      borderRadius: "21px 21px 0 0",
    };
    return (
      <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-light shadow-sm mx-auto" style={boxStyle}></div>
      </div>
    );
  }
}

export default ProductBgDark;
