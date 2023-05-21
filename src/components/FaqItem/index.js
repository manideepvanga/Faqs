import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isvisible: false}

  Togglebutton = () => {
    this.setState(prevState => ({isvisible: !prevState.isvisible}))
  }

  RenderAnswer = () => {
    const {isvisible} = this.state
    const {item} = this.props
    const {id, questionText, answerText} = item

    if (isvisible) {
      return <div>{answerText}</div>
    }
    return null
  }

  render() {
    const {isvisible} = this.state
    const imgurl = isvisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const alttext = isvisible ? 'minus' : 'plus'
    const classer = isvisible ? 'line' : ''
    const {item} = this.props
    const {id, questionText, answerText} = item

    return (
      <li className="listitem">
        <div className="line1">
          <p>{questionText}</p>
          <button onClick={this.Togglebutton}>
            <img src={imgurl} alt={alttext} />
          </button>
        </div>
        <hr className={classer} />
        <div>{this.RenderAnswer()}</div>
      </li>
    )
  }
}
export default FaqItem
