// Write your code here

import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updateData = data.teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))

    this.setState({
      teams: updateData,
      isLoading: false,
    })
  }

  render() {
    const {teams, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="team-list-container">
          <div className="heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="logo"
              alt="ipl logo"
            />
            <h1 className="home-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div className="loader-container" testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} />
            </div>
          ) : (
            <ul className="team-card-container-list">
              {teams.map(eachTeam => (
                <TeamCard key={eachTeam.id} cardDetails={eachTeam} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
