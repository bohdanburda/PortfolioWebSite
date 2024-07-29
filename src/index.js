import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.querySelector("#root"));

const [red, green, blue] = [0, 0, 0];
const section1 = document.querySelector(".bg_section");

window.addEventListener("scroll", () => {
  const y = 1 + (window.scrollY || window.pageYOffset);
  // #FFB200
  const [r, g, b] = [
    red + y / 5 > 255 ? 255 : red + y / 5,
    green + y / 7 > 178 ? 178 : green + y / 7,
    0,
  ].map(Math.round);
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
