import React, { useEffect, useState } from 'react';
import { forEach } from 'lodash';
import PlayersListing from './PlayersListing';
import PlayerFormation from './PlayerFormation';
import CreateTeamHeader from './CreateTeamHeader';
import { initState, formationPlayerTypes as fPlayerTypes, LeagueId } from './constant';
import { getAllPlayers, getFormations, getTeams, createLeagueTeam, getLeague } from '../../utils/apiService';

const CreateTeam = () => {

  let totalBudget = 100;

  let [budget, setBudget] = useState(initState.budget);
  let [players, setPlayers] = useState(initState.players);
  const [allPlayers, setAllPlayers] = useState({});
  const [formations, setFormations] = useState(initState.formations);
  const [teams, setTeams] = useState(initState.teams);
  const [activeFormation, setActiveFormation] = useState();
  const [teamName, setTeamName] = useState('');
  const [selectTeamValue, setSelectTeamValue] = useState('');

  /**
   * generates selectable players for PlayerListing Component
   * @param {*} leagueId
   */
  const getSelectablePlayers = async (leagueId = LeagueId) => {
    const playersList = await getAllPlayers({ leagueId });

    // playersList -> [1, 2 ...]<team_id>
    Object.keys(playersList).forEach((teamId) => {

      // playersList -> 1 -> ['teamIdbatsmen', 'bowlers' ...]<player_type>
      Object.keys(playersList[teamId]).forEach((playerType) => {

        // set selected property to make Listing work with PlayerListsing Component
        playersList[teamId][playerType] = playersList[teamId][playerType].map(player => {
          return { ...player, selected: false };
        });
      });
    });
    // console.log(['CreateTeam.getSelectablePlayers', playersList]);
    return playersList;
  }

  const changeTeamHandler = (event) => {
    const teamId = event.target.value;
    setPlayers(allPlayers[teamId]);
    setSelectTeamValue(teamId);
  };

  const changeFormationHandler = async (event) => {
    // TODO: should ask user first before changing select
    window.alert('You are about to reset everything back by changing Formation');
    const formation = formations.find(formation => formation.id === parseInt(event.target.value));
    if (formation) {
      const _activeFormation = { ...initState.activeFormation };
      forEach(_activeFormation, (data, type) => {
        _activeFormation[type].total = parseInt(formation[fPlayerTypes[type]]);
        _activeFormation[type].current = 0;
      });
      _activeFormation.id = formation.id;
      setActiveFormation(_activeFormation);

      const [playersList, teamsList] = await Promise.all([
        getSelectablePlayers(),
        getTeams(),
      ]);

      setTeams(teamsList);
      setAllPlayers(playersList);
      setPlayers({ ...initState.players });
      setBudget(totalBudget);
      setSelectTeamValue('');
    }
  };

  const selectPlayerHandler = (player, _index) => {
    if (budget <= totalBudget && budget > -1) {
      const { teamId, type } = player;
      let selectedPlayer = { ...allPlayers[teamId][type][_index] };

      // update players display on PlayerFormation board
      const _activeFormation = { ...activeFormation };
      if (selectedPlayer.selected) {
        // then deselect
        selectedPlayer.selected = false;
        --_activeFormation[type].current;
        setBudget(budget + Number(player.price));
      } else if (_activeFormation[type].current < _activeFormation[type].total) {
        // then select
        selectedPlayer.selected = true;
        ++_activeFormation[type].current;
        setBudget(budget - Number(player.price));
      }

      allPlayers[teamId][type][_index] = { ...selectedPlayer };

      // console.log(['CreateTeam.selectPlayerHandler', { ...allPlayers[teamId] }, { ..._activeFormation }]);
      setPlayers({ ...allPlayers[teamId] });
      setActiveFormation({ ..._activeFormation });
    }
  };

  const _setTeamName = (event) => {
    setTeamName(event.target.value);
  };

  const createTeam = async () => {
    try {
      let playerIds = [];

      forEach(allPlayers, (teamData) => {
        forEach(teamData, (players) => {
          playerIds = playerIds.concat(
            players.filter(player => player.selected).map(player => player.player_id)
          );
        });
      });

      const payload = {
        name: teamName || null,
        league_id: LeagueId || null,
        formation_id: activeFormation.id || null,
        players: playerIds
      }

      if (!payload.name && !payload.league_id && !payload.formationId && payload.players.length < 1) {
        throw new Error('Validation Error');
      }

      const response = await createLeagueTeam(payload);
      window.location.href = '/';
      return;
    } catch (err) {
      console.log(err);
      window.alert('Unable to create team: ' + err.message);
    }
  };

  useEffect(() => {
    (async () => {
      // get data
      const [playersList, formationsList, teamsList, league] = await Promise.all([
        getSelectablePlayers(),
        getFormations(),
        getTeams(),
        getLeague(LeagueId)
      ]);

      totalBudget = league.budget;

      // set state
      setAllPlayers(playersList);
      setFormations(formationsList);
      setTeams(teamsList);
      setBudget(totalBudget);
      setActiveFormation();
    })();
  }, []);

  return (
    <section className="ftco-section mt-5 pb-0 team-filter">
      <div className="container pb-5 mb-5">
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={teamName} onChange={_setTeamName} placeholder="Your team name" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button onClick={createTeam} className="btn btn-primary navbar-toggler" type="button"> Create Team </button>
          </div>
        </div>
        <CreateTeamHeader
          budget={budget}
          formations={formations}
          teams={teams}
          selectTeamValue={selectTeamValue}
          changeTeam={changeTeamHandler}
          changeFormation={changeFormationHandler}
        ></CreateTeamHeader>
        <PlayersListing
          playerList={players}
          togglePlayer={selectPlayerHandler}>
        </PlayersListing>
        <PlayerFormation formation={activeFormation}></PlayerFormation>
      </div>
    </section>
  );
};

export default CreateTeam;
