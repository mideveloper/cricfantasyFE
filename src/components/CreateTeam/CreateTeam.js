import React, { useEffect, useState } from 'react';
import PlayersListing from './PlayersListing';
import CreateTeamHeader from './CreateTeamHeader';
import { initState, initialBudget } from './constant';
import { getPlayers, getFormations, getTeams } from '../../utils/apiService';

const CreateTeam = () => {
  const [players, setPlayers] = useState(initState.players);
  const [formations, setFormations] = useState(initState.formations);
  const [teams, setTeams] = useState(initState.teams);

  const changeTeamHandler = async event => {
    const playersList = await getPlayers({ id: event.target.value });
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
    })();
  }, []);

  return (
    <section className="ftco-section mt-5 pb-0 team-filter">
      <div className="container">
        <CreateTeamHeader
          remainingBudget={initialBudget}
          formations={formations}
          teams={teams}
          changeTeam={changeTeamHandler}
        ></CreateTeamHeader>
        <PlayersListing playerList={players}></PlayersListing>
      </div>
    </section>
  );
};

export default CreateTeam;
