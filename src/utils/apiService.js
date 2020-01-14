import httpService from './httpService';

export const login = payload => {
  // httpService.init();
  return httpService.post('auth/login', payload);
};

export const getPlayers = payload => {
  const players = [];
  for (let i = 0; i < 10; i++) {
    players.push({
      id: i,
      name: `Player ${i}`,
      type: 'Batsman',
      team: 'Karachi King',
    });
  }
  const bowlers = [];
  for (let i = 12; i < 20; i++) {
    bowlers.push({
      id: i,
      name: `Player ${i}`,
      type: 'Bowlers',
      team: 'Peshawar Zalmi',
    });
  }

  return Promise.resolve({
    batsmen: players,
    bowlers,
    keepers: players,
    allRounders: players,
  });
};

export const getFormations = payload => {
  const formations = [];
  for (let i = 1; i < 4; i++) {
    formations.push({
      id: i,
      name: `Formation ${i}`,
    });
  }
  return Promise.resolve(formations);
};

export const getTeams = payload => {
  const teams = [
    { id: 1, name: 'Karachi King' },
    { id: 2, name: 'Multan Sultan' },
    { id: 3, name: 'Islamabad United' },
    { id: 4, name: 'Peshawar Zalmi' },
    { id: 5, name: 'Lahore Qalandar' },
    { id: 6, name: 'Quetta Gladiator' },
  ];
  return Promise.resolve(teams);
};
