import './NavBar.scss'
import { Resume } from "./Resume"

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-button">01</div>
      <div className="navbar-button">02</div>
      <div className="navbar-button">03</div>
      <Resume />
    </div>
  )
}