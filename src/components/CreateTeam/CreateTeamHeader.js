import React from 'react';
import PropTypes from 'prop-types';
import { initState } from './constant';

const CreateTeamHeader = ({ budget, formations, teams, changeTeam, changeFormation, selectTeamValue }) => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="filter-drop">
          <h3>Formation</h3>
          <div className="select">
            <select onChange={changeFormation} name="slct" id="slct">
              <option selected disabled>
                Select Formation
              </option>
              {formations.map(formation => (
                <option key={formation.id} value={formation.id}>
                  {formation.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="filter-drop">
          <h3>Teams</h3>
          <div className="select">
            <select value={selectTeamValue} onChange={changeTeam} name="slct" id="slct">
              <option selected disabled value="">
                Select Team
              </option>
              {teams.map(filter => (
                <option key={filter.id} value={filter.id}>
                  {filter.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="filter-drop">
          <h3>Total Budget</h3>
          <h2>{budget}</h2>
        </div>
      </div>
    </div>
  );
};

CreateTeamHeader.propTypes = {
  budget: PropTypes.number.isRequired,
  formations: PropTypes.array.isRequired,
  teams: PropTypes.array.isRequired,
  changeTeam: PropTypes.func.isRequired,
};

CreateTeamHeader.defaultProps = {
  budget: initState.budget,
  formations: initState.formations,
  teams: initState.teams,
};

export default CreateTeamHeader;
