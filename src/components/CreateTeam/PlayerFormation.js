import React from 'react'


const formations = {
  bowlers : ['bowler active', 'bowler', 'bowler active', 'bowler'],
  batsman : ['batsman active', 'batsman','batsman', 'batsman', 'batsman'],
  keepers : ['keeper active'],
  allRounder : ['allrounder active','allrounder'],
}
const PlayerFormation = () => {
  return (
    <div className="player-formation">
    <div className="d-flex align-items-center">
      {formations.keepers.map((keeper, index) => (
        <div key={index} className={keeper}></div>
      ))}
        
    </div>
    <div className="d-flex align-items-center justify-content-around">
    {formations.batsman.map((player, index) => (
        <div key={index} className={player}></div>
      ))}
    </div>
    <div className="d-flex align-items-center justify-content-around">
    {formations.allRounder.map((player, index) => (
        <div key={index} className={player}></div>
      ))}
    </div>
    <div className="d-flex align-items-center justify-content-around ">
    {formations.bowlers.map((player, index) => (
        <div key={index} className={player}></div>
      ))}
    </div>

</div>
  )
}


export default PlayerFormation;