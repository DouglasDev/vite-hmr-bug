import { useState,Component } from 'react'
import logo from './logo.svg'
import './App.css'

//this updates
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}
// export default App

//this doesn't update
class App2 extends Component {
  constructor(props){
    super(props)
    this.state={
      count: 0
    }
  }

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Editing this text doesn't update</p>
        <p>
          <button type="button" onClick={() => this.setState({count: this.state.count+1})}>
            count is: {this.state.count}
          </button>
        </p>
      </header>
    </div>
  )
}
}

export default App2
