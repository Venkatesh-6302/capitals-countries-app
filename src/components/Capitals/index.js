import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({
      capitalId: event.target.value,
    })
  }

  getCountry = () => {
    const {capitalId} = this.state

    const activeCountry = countryAndCapitalsList.find(
      each => each.id === capitalId,
    )

    return activeCountry
  }

  render() {
    const {capitalId} = this.state
    const {country} = this.getCountry()
    return (
      <div className="bg-container">
        <div className="card">
          <div>
            <h1 className="heading">Countries And Capitals</h1>
            <div className="question-container">
              <select
                className="capital-select"
                onChange={this.onChangeCapital}
                value={capitalId}
              >
                {countryAndCapitalsList.map(each => (
                  <option key={each.id} value={each.id} className="options">
                    {each.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p>is capital of which country?</p>
            </div>
            <p className="country">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals
