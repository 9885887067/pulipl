// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails
  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} className="team-image" alt={name} />
        <p className="name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
