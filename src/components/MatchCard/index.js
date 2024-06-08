// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props

  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails

  const getStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'

  const matchStatusClassName = `match-status ${getStatusClassName(matchStatus)}`

  return (
    <li className="match-item">
      <div className="match-card">
        <img
          src={competingTeamLogo}
          className="logo"
          alt={`competingTeam ${competingTeam}`}
        />
        <p className="team">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={matchStatusClassName}>{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
