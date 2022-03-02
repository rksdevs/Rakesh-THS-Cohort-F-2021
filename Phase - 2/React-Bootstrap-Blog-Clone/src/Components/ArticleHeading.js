import { Component } from "react";

class ArticleHeading extends Component {
  render() {
    return (
      <h3 className="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3> //why is this working without being closed by div element?
    );
  }
}

export default ArticleHeading;
