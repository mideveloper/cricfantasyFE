import React, { useEffect, useState } from 'react';
import PlayersListing from './PlayersListing';
import PlayerFormation from './PlayerFormation';
import CreateTeamHeader from './CreateTeamHeader';
import { initState } from './constant';
import { getPlayers, getFormations, getTeams } from '../../utils/apiService';

const CreateTeam = () => {
  const [players, setPlayers] = useState(initState.players);
  const [formations, setFormations] = useState(initState.formations);
  const [teams, setTeams] = useState(initState.teams);
  const [budget, setBudget] = useState(initState.budget);

  const changeTeamHandler = async event => {
    const id = event.target.value;
    const playersList = await getPlayers({ id });
    setPlayers(playersList);
  };

  useEffect(() => {
    (async () => {
      const [playerList, formationsList, teamsList] = await Promise.all([
        getPlayers(),
        getFormations(),
        getTeams(),
      ]);
      setPlayers(playerList);
      setFormations(formationsList);
      setTeams(teamsList);
      setBudget(150);
    })();
  }, []);

  return (
    <section className="ftco-section mt-5 pb-0 team-filter">
      <div className="container pb-5 mb-5">
        <CreateTeamHeader
          budget={budget}
          formations={formations}
          teams={teams}
          changeTeam={changeTeamHandler}
        ></CreateTeamHeader>
        <PlayersListing playerList={players}></PlayersListing>
        <PlayerFormation></PlayerFormation>
      </div>
    </section>
  );
};

export default CreateTeam;
