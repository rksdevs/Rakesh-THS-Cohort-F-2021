import React from "react";
import Footer from "./Components/Footer";
import NavbarOne from "./Components/Navbar-One";
import NavbarTwo from "./Components/Navbar-Two";
import Hero from "./Components/Hero";
import FeatureCard from "./Components/FeatureCard";
import ArticleHeading from "./Components/ArticleHeading";
import Articles from "./Components/Articles";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <Hero />
          </div>
          <div className="row mb-2">
            {/* how to render date using Date.Now */}
            <FeatureCard topic="World" heading="Featured Post" date="2nd Oct" />
            <FeatureCard topic="Design" heading="Post Title" date="1st Oct" />
          </div>
          <div className="row g-5">
            <div className="col-md-8">
              <ArticleHeading />
              <Articles />
              <Articles />
              <Articles />
            </div>
            <div className="col-md-4">
              <div className="position-sticky" style={{ top: 2 + "rem" }}>
                <About />
                <About />
                <About />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
