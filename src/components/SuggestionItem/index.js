// Write your code here
import './index.css'

const Items = props => {
  const {searchList, getValue} = props
  const {suggestion} = searchList
  const SendValue = () => {
    getValue(suggestion)
  }

  return (
    <li className="list">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-img"
        onClick={SendValue}
      />
    </li>
  )
}
export default Items
