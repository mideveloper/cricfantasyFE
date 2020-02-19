import React from 'react';
import { forEach } from 'lodash';
import { formationPlayerTypes as playerType } from './constant';

const playerClasses = {
  batsmen: { active: 'batsman active', inactive: 'batsman', key: playerType.bastmen },
  bowlers: { active: 'bowler active', inactive: 'bowler', key: playerType.bowlers },
  keepers: { active: 'keeper active', inactive: 'keeper', key: playerType.keepers },
  allRounders: { active: 'allrounder active', inactive: 'allrounder', key: playerType.allRounders }
};

const formations = {
  batsmen: [], bowlers: [], keepers: [], allRounders: []
};

const generateFormation = (formationData) => {
  forEach(formations, (data, playerType) => {
    // reset formations
    formations[playerType] = [];

    // set new formations
    for (let i = 0; i < formationData[playerType].total; i++) {
      formations[playerType].push(playerClasses[playerType].inactive);
    }

    for (let i = 0; i < formationData[playerType].current; i++) {
      formations[playerType][i] = playerClasses[playerType].active;
    }
  });
};

const PlayerFormation = ({ formation }) => {

  if (formation && Object.keys(formation).length > 0) {
    generateFormation(formation);
    return (
      <div className="player-formation">
        <div className="d-flex align-items-center">
          {formations.keepers.map((keeper, index) => (
            <div key={index} className={keeper}></div>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-around">
          {formations.batsmen.map((player, index) => (
            <div key={index} className={player}></div>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-around">
          {formations.allRounders.map((player, index) => (
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
  return (
    <div className="player-formation"></div>
  );
}


export default PlayerFormation;