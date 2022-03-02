import react from "react";
import { Footer, Main } from "./Components";

class App extends react.Component {
  render() {
    return (
      <div className="container">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
