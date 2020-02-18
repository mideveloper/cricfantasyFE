import httpService from './httpService';
import { groupBy, forEach } from 'lodash';
import { getLocalStorage } from './setStorage';

export const login = payload => {
  // httpService.init();
  return httpService.post('auth/login', payload);
};

export const getAllPlayers = async (payload) => {

  const playerTypes = {
    batsmen: [],
    bowlers: [],
    keepers: [],
    allRounders: [],
  };

  if (!payload || typeof payload === undefined || Object.keys(payload).length < 1) {
    return playerTypes;
  }

  const { teamId, leagueId } = payload;

  const playerTypeEnum = {
    '1': 'batsmen',
    '2': 'bowlers',
    '3': 'keepers',
    '4': 'allRounders'
  };

  const queryString = {};
  teamId && (queryString.teamId = teamId);

  const allPlayers = await httpService.get(`leagues/${leagueId}/players`, queryString);

  // { 1: [ players from team 1 ], 2: [ players from team 2 ], ... n: [ players from team n ] }
  const teamPlayers = groupBy(allPlayers.data.data, 'team_id');

  forEach(teamPlayers, (players, team) => {
    players.forEach((player) => {
      try {
        playerTypes[playerTypeEnum[player.player_type]].push({
          id: player.id,
          player_id: player.player_id,
          name: player.name,
          type: playerTypeEnum[player.player_type],
          typeId: player.player_type,
          team: player.team_name,
          teamId: player.team_id,
          price: player.worth
        });
      } catch (err) {
        return;
      }
    });
    teamPlayers[team] = { ...playerTypes };

    // reset playerTypes;
    Object.keys(playerTypes).map((type) => !!(playerTypes[type] = []));
  });

  return teamPlayers;
};

export const getFormations = async () => {
  try {
    const formations = await httpService.get('formations');
    return formations.data.data || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getTeams = async () => {
  try {
    const teams = await httpService.get('leagues/1/teams');
    return (teams.data.data) || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getLeague = async (leagueId) => {
  try {
    const { data } = await httpService.get(`leagues/${leagueId}`);
    return data.data;
  } catch (err) {
    console.log(err);
    return {
      budget: 100
    };
  }
};

export const createLeagueTeam = async (payload) => {
  try {
    var user = getLocalStorage('loggedInUser')
    httpService.init(user.access_token);
    const leagueTeam = await httpService.post('league-team', payload);
    return leagueTeam;
  } catch (err) {
    console.log(err);
    throw new Error('Unable to create Team');
  }
};
