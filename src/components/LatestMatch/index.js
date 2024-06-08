// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="heading">Latest matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-details-logo-container">
          <div className="latest-container-1">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="logo"
          />
        </div>
        <hr className="separator" />
        <div className="latest-container-2">
          <p className="label">First Innings</p>
          <p className="value">{firstInnings}</p>
          <p className="label">Second Innings</p>
          <p className="value">{secondInnings}</p>
          <p className="label">Man Of The Match</p>
          <p className="value">{manOfTheMatch}</p>
          <p className="label">Umpires</p>
          <p className="value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
