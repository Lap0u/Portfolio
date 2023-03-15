import './App.scss'
import axios from 'axios'
import { Main } from "./components/Main"

const BACKURL = "http://localhost:4000"

function App () {
  axios.get(`${BACKURL}/base`)
    .then(res => {
      console.log(res.data)

    })
  return (
    <div>
      <Main />
    </div>
  )
}

export default App
