// Write your code here
import {Component} from 'react'

import './index.css'

import Items from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeList = event => {
    this.setState({searchInput: event.target.value})
  }

  getValue = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    console.log(searchInput)
    console.log(suggestionsList)
    const result = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )

    return (
      <div className="bg">
        <div className="google-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-bar-container">
            <div className="search-bar">
              <img
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input"
                onChange={this.onChangeList}
                value={searchInput}
              />
            </div>
            <div>
              <ul className="list-container">
                {result.map(each => (
                  <Items
                    searchList={each}
                    key={each.id}
                    getValue={this.getValue}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
