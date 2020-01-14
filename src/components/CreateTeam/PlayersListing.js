import React from 'react';
import { PlayersTypes, tabList, initState } from './constant';
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
    <div className="row mt-5">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {tabList.map((tabItem, index) => (
          <li key={index} className="nav-item">
            <a
              className={index === 0 ? 'nav-link active' : 'nav-link'}
              id={`${tabItem}-tab`}
              data-toggle="tab"
              href={`#${tabItem}`}
              role="tab"
              aria-controls={tabItem}
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
            id={tabItem}
            role="tabpanel"
            aria-labelledby={`${tabItem}-tab`}
          >
            <div className="row">
              <div className="col-lg-4">
                {tabListToPlayersMap[tabItem].map(player => (
                  <div key={player.id} className="player-detail-tab">
                    {player.name}
                  </div>
                ))}
              </div>
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
  playerList: PropTypes.array.isRequired,
};

PlayersListing.defaultProps = {
  playerList: initState.players,
};

export default PlayersListing;
