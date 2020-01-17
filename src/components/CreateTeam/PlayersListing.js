import React from 'react';
import { PlayersTypes, tabList, initState, tabListToClassMap as classMap, tabListToClassMap } from './constant';
import PropTypes from 'prop-types';

const PlayersListing = ({ playerList }) => {
  const { batsmen, bowlers, keepers, allRounders } = playerList;
  const tabListToPlayersMap = {
    [PlayersTypes.BATSMAN]: batsmen,
    [PlayersTypes.BOWLER]: bowlers,
    [PlayersTypes.KEEPER]: keepers,
    [PlayersTypes.ALL_ROUNDER]: allRounders,
  };
  return (
    <div className="row mt-5 pt-4">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {tabList.map((tabItem, index) => (
          <li key={index} className="nav-item">
            <a
              className={index === 0 ? 'nav-link active' : 'nav-link'}
              id={`${classMap[tabItem]}-tab`}
              data-toggle="tab"
              href={`#${classMap[tabItem]}`}
              role="tab"
              aria-controls={classMap[tabItem]}
              aria-selected={index === 0 ? 'true' : 'false'}
            >
              {tabItem}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        {tabList.map((tabItem, index) => (
          <div
            className={index === 0 ? 'tab-pane fade show active' : 'tab-pane fade'}
            key={index}
            id={classMap[tabItem]}
            role="tabpanel"
            aria-labelledby={`${classMap[tabItem]}-tab`}
          >
            <div className="row">
                {tabListToPlayersMap[tabItem].map(player => (
                  <div key={player.id} className="col-lg-4">
                  <div key={player.id} className="player-detail-tab">
                      <div className="d-flex align-items-center">
                        <i className={`icon-${classMap[tabItem]}`}></i> {player.name}</div> 
                      <div><span className="cr">{player.price} CR</span></div>
                  </div>
                  </div>
                ))}
              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

PlayersListing.propTypes = {
  playerList: PropTypes.object.isRequired,
};

PlayersListing.defaultProps = {
  playerList: initState.players,
};

export default PlayersListing;
