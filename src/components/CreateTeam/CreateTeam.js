import React, { useEffect, useState } from 'react';
import { forEach, groupBy } from 'lodash';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import PlayersListing from './PlayersListing';
import PlayerFormation from './PlayerFormation';
import CreateTeamHeader from './CreateTeamHeader';
import { initState, formationPlayerTypes as fPlayerTypes, LeagueId } from './constant';
import { getAllPlayers, getFormations, getTeams, createLeagueTeam, getLeague, getloggedInUserTeam, updateLeagueTeam } from '../../utils/apiService';

const CreateTeam = () => {

  let userLeagueTeam = null;
  let buttonLabel = 'Save Team';
  let totalBudget = 100;

  let [userTeamId, setUserTeamId] = useState(0);
  let [budget, setBudget] = useState(initState.budget);
  let [players, setPlayers] = useState(initState.players);
  const [allPlayers, setAllPlayers] = useState({});
  const [formations, setFormations] = useState(initState.formations);
  const [teams, setTeams] = useState(initState.teams);
  const [activeFormation, setActiveFormation] = useState();
  const [teamName, setTeamName] = useState('');
  const [selectTeamValue, setSelectTeamValue] = useState('');
  const [selectFormationValue, setSelectFormationValue] = useState();

  /**
   * generates selectable players for PlayerListing Component
   * @param {*} leagueId
   */
  const getSelectablePlayers = async (leagueId = LeagueId) => {
    const playersList = await getAllPlayers({ leagueId });

    // playersList -> [1, 2 ...]<team_id>
    Object.keys(playersList).forEach((teamId) => {

      // playersList -> 1 -> ['batsmen', 'bowlers' ...]<player_type>
      Object.keys(playersList[teamId]).forEach((playerType) => {

        // set selected property to make Listing work with PlayerListsing Component
        playersList[teamId][playerType] = playersList[teamId][playerType].map(player => {
          return { ...player, selected: false };
        });
      });
    });
    return playersList;
  }

  const changeTeamHandler = (event) => {
    const teamId = event.target.value;
    setPlayers(allPlayers[teamId]);
    setSelectTeamValue(teamId);
  };

  const changeFormationHandler = async (event) => {
    const fid = event.target.value;
    if (activeFormation) {
      const options = {
        title: 'Are you sure?',
        message: 'You want to change formation? Selected players will be lost.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              changeFormation(fid);
            }
          },
          {
            label: 'No',
            onClick: () => { }
          }
        ]
      };
      confirmAlert(options);
    } else {
      changeFormation(event.target.value);
    }
  };

  const changeFormation = async (fId) => {
    const formation = formations.find(formation => formation.id === parseInt(fId));
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
  }

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
      } else {
        toast.error('You can not select ' + type + ' more than ' + _activeFormation[type].total);
      }

      allPlayers[teamId][type][_index] = { ...selectedPlayer };

      setPlayers({ ...allPlayers[teamId] });
      setActiveFormation({ ..._activeFormation });
    } else {
      toast.error('Your points exceeds.');
    }
  };

  const _setTeamName = (event) => {
    setTeamName(event.target.value);
  };

  const prepareCreateTeam = async () => {
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
  };

  const prepareUpdateTeam = async (_userLeagueTeam) => {
    let selectedTeamId;

    const [playersList, formationsList, teamsList] = await Promise.all([
      getSelectablePlayers(),
      getFormations(),
      getTeams()
    ]);

    // const selectedPlayers = groupBy(userLeagueTeam.players, (player) => player[3]);

    const updateAllPlayers = { ...playersList };
    // looping ki intehai gandi tareen approch, leken nihayat unrealistic deadlines me esa hi chamatkaar kia jasakta he
    Object.keys(updateAllPlayers).forEach((teamId) => {
      Object.keys(updateAllPlayers[teamId]).forEach((playerType) => {
        if (updateAllPlayers[teamId][playerType].length > 0) {
          updateAllPlayers[teamId][playerType].forEach((player, index) => {

            let foundPlayer = userLeagueTeam.players.find((playerData) => {
              return playerData[0] === player.id
            });
            if (foundPlayer) {
              !selectedTeamId && (selectedTeamId = player.teamId);
              updateAllPlayers[teamId][playerType][index].selected = true;
            }
          });
        }
      });
    });
    setAllPlayers({ ...updateAllPlayers });

    const formation = formationsList.find(formation => formation.id === parseInt(userLeagueTeam.formation_id));
    const _activeFormation = { ...initState.activeFormation };
    forEach(_activeFormation, (data, type) => {
      _activeFormation[type].total = parseInt(formation[fPlayerTypes[type]]);
      _activeFormation[type].current = parseInt(formation[fPlayerTypes[type]]);
    });
    _activeFormation.id = formation.id;
    setSelectFormationValue(formation.id);
    setActiveFormation(_activeFormation);

    totalBudget = userLeagueTeam.total_budget;
    setBudget(userLeagueTeam.remaining_budget);
    setTeamName(userLeagueTeam.name);

    setFormations(formationsList);
    setTeams(teamsList);
    setPlayers(allPlayers[selectedTeamId || teamsList[0].id]);
    setSelectTeamValue(selectedTeamId || teamsList[0].id);
    setUserTeamId(_userLeagueTeam.id);
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
      if (!teamName) {
        toast.error('Team name required.');
      } else if (!activeFormation || !activeFormation.id) {
        toast.error('Please select formation.');
      } else if (!playerIds || playerIds.length < 11) {
        toast.error('Please can not be less than 11.');
      } else if (playerIds.length > 11) {
        toast.error('Please can not be greater than 11.');
      } else {
        const payload = {
          name: teamName || null,
          league_id: LeagueId || null,
          formation_id: activeFormation.id || null,
          players: playerIds
        }
        const options = {
          title: 'Are you sure?',
          message: 'You want to save this team.',
          buttons: [
            {
              label: 'Yes',
              onClick: async () => {
                if (userTeamId) {
                  payload.id = userTeamId;
                }
                const x = await createLeagueTeam(payload);
                if (x.status === 200) {
                  window.location.href = '/';
                }
              }
            },
            {
              label: 'No',
              onClick: () => { }
            }
          ]
        };
        confirmAlert(options);
        return;
      }
    } catch (err) {
      toast.error('Error while team creation please try later.');
    }
  };

  useEffect(() => {
    (async () => {
      const response = await getloggedInUserTeam();
      if (response.data.data.length > 0) {
        userLeagueTeam = response.data.data.pop();
        buttonLabel = 'Update Team';
        await prepareUpdateTeam(userLeagueTeam);
      } else {
        await prepareCreateTeam();
      }
    })();
  }, []);

  return (
    <section className="ftco-section mt-5 pb-0 team-filter">
      <div className="container pb-5 mb-5">
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={teamName} onChange={_setTeamName} placeholder="Your team name" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button onClick={createTeam} className="btn btn-primary navbar-toggler" type="button"> {buttonLabel} </button>
          </div>
        </div>
        <CreateTeamHeader
          budget={budget}
          formations={formations}
          teams={teams}
          selectTeamValue={selectTeamValue}
          selectFormationValue={selectFormationValue}
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
