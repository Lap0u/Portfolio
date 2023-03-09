import pong_thumb from "../assets/thumbnail/pong_thumbnail.jpg"
import coming_soon from "../assets/thumbnail/coming_soon.jpg"
import './Main.scss'
import { MenuBar } from "./MenuBar"

export const Main = () => {
  return (
    <div>
      <MenuBar />
      <h1>Welcome to my amazing portfolio</h1>
      <div className="thumbnail_grid">
        <div className="thumbnail_box">
          <img src={pong_thumb}></img>
        </div>
        <div className="thumbnail_box">
          <img src={coming_soon}></img>
        </div>
        <div className="thumbnail_box">
          <img src={coming_soon}></img>
        </div>
        <div className="thumbnail_box">
          <img src={coming_soon}></img>
        </div>
      </div>
    </div>
  )
}