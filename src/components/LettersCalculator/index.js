// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, searchInput: ''}

  onText = event => {
    this.setState({searchInput: event.target.value})
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count, searchInput} = this.state
    console.log(searchInput)

    return (
      <div className="bg">
        <div className="imgContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
        <div className="calculatorContainer">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label htmlFor="Enter the phrase" className="para">
            Enter the phrase
          </label>
          <input
            id="Enter the phrase"
            type="text"
            className="input"
            placeholder="Enter the phrase"
            onChange={this.onText}
          />
          <div>
            <p className="para2" type="button">
              No.of letters: {count}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
