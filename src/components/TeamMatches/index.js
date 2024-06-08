// Write your code here
import {Component} from 'react'

import './index.css'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamsMatchesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getFormatData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props

    const {params} = match

    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const fetchData = await response.json()

    const updateData = {
      teamBannerUrl: fetchData.team_banner_url,
      latestMatch: this.getFormatData(fetchData.latest_match_details),
      recentMatches: fetchData.recent_matches.map(eachMatch =>
        this.getFormatData(eachMatch),
      ),
    }

    this.setState({
      teamsMatchesData: updateData,
      isLoading: false,
    })
  }

  renderRecentMatches = () => {
    const {teamsMatchesData} = this.state

    const {recentMatches} = teamsMatchesData

    return (
      <ul className="recent-matches-list">
        {recentMatches.map(each => (
          <MatchCard matchDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamsMatchesData} = this.state
    const {teamBannerUrl, latestMatch} = teamsMatchesData

    return (
      <div className="responsive-container">
        <img src={teamBannerUrl} alt="team banner" className="team-image" />
        <LatestMatch latestMatchDetails={latestMatch} />
        {this.renderRecentMatches()}
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className={`team-matches-container ${this.getRouteClassName()}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
