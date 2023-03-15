import './Resume.scss'
import resume from '../../assets/pdf/CV Clement 2023.pdf'

export const Resume = () => {
  return (
    <div className="resume">
      <button onClick={()=> window.open(resume)}className="resume-button" >Resume</button>
    </div>
  )
}