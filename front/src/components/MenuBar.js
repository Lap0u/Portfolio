import { Logo } from "./Logo"
import "./MenuBar.scss"
import { NavBar } from "./NavBar"

export const MenuBar = () => {
  return (
    <div className="menubar">
      <Logo />
      <NavBar />
    </div>
  )
}