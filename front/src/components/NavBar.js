import './NavBar.scss'
import { Resume } from "./Resume"

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-button">
        <span>01. <a>About</a></span>
      </div>
      <div className="navbar-button">
        <span>02. <a>Projects</a></span>
      </div>
      <div className="navbar-button">
        <span>03. <a>Contact</a></span>
      </div>
      <Resume />
    </div>
  )
}