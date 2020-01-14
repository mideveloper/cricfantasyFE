import React from 'react';
import PropTypes from 'prop-types';
import { initState } from './constant';


const CreateTeamHeader = ({ remainingBudget, formations, teams, changeTeam }) => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="filter-drop">
          <h3>Formation</h3>
          <div className="select">
            <select name="slct" id="slct">
              <option selected disabled>
                Select Formation
              </option>
              {formations.map(formation => (
                <option key={formation.id} value={formation.id}>{formation.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="filter-drop">
          <h3>All Teams</h3>
          <div className="select">
            <select onChange={changeTeam} name="slct" id="slct">
              <option selected disabled>
                Select Team
              </option>
              {teams.map(filter => (
                <option key={filter.id} value={filter.id}>{filter.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="filter-drop">
          <h3>Total Budget</h3>
          <h2>{remainingBudget}</h2>
        </div>
      </div>
    </div>
  );
};

CreateTeamHeader.propTypes = {
  remainingBudget : PropTypes.string.isRequired,
  formations : PropTypes.array.isRequired, 
  teams: PropTypes.array.isRequired,
  changeTeam: PropTypes.func.isRequired,
};

CreateTeamHeader.defaultProps = {
  remainingBudget : 0,
  formations : initState.formations, 
  teams: initState.teams,
};

export default CreateTeamHeader;
