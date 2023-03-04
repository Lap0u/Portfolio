
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

const BACKURL = "http://localhost:4000"

function App () {
  axios.get(`${BACKURL}/base`)
    .then(res => {
      console.log(res.data)
    })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (main)
        </a>
      </header>
    </div>
  )
}

export default App
