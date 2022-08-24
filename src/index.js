import ReactDOM from "react-dom";
import App from './App';
import './index.css'

ReactDOM.render(<App/>, document.querySelector("#root"))

const [red, green, blue] = [0, 0, 0]
const section1 = document.querySelector('.bg_section')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset)
  const [r, g, b] = [red, green, blue + y/5 > 149 ? 149 : blue + y/5].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
