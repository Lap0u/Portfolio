import './Main.scss'
import { MenuBar } from "./menus/MenuBar"
import { Home } from "./main_parts/Home"
import { About } from "./main_parts/About"
import { Projects } from "./main_parts/Projects"
import { Contact } from "./main_parts/Contact"

export const Main = () => {
  return (
    <div>
      <MenuBar />
      <div className="text-box-left">
        <Home />
      </div>
      <div className="text-box-right">
        <About />
      </div>
      <div className="text-box-left">
        <Projects />
      </div>
      <div className="text-box-right">
        <Contact />
      </div>
    </div>
  )
}