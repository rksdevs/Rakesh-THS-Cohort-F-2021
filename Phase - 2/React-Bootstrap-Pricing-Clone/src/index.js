import ReactDom from "react-dom";
import App from "./App";

const Ele = <h1>Hello Ele</h1>;

ReactDom.render(<App />, document.getElementById("root"));
// ReactDom.render(Ele, document.getElementById("branch"));
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDom.render(element, document.getElementById("tick"));
// }

// setInterval(tick, 1000);
