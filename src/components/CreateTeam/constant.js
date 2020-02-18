export const initState = {
  players: {
    batsmen: [],
    bowlers: [],
    keepers: [],
    allRounders: [],
  },
  formations: [],
  teams: [],
  budget: 0,
  activeFormation: {
    batsmen: {
      total: 0,
      current: 0
    },
    bowlers: {
      total: 0,
      current: 0
    },
    keepers: {
      total: 0,
      current: 0
    },
    allRounders: {
      total: 0,
      current: 0
    }
  },
  createTeamData: {
    formation: {},
    team: {},
    totalBudget: 0,
    remainingBudget: 0,
    league: {},
    players: [],
    userId: null
  }
};

export const PlayersTypes = Object.freeze({
  BATSMAN: 'Batsman',
  BOWLER: 'Bowler',
  KEEPER: 'Keeper',
  ALL_ROUNDER: 'All Rounder',
});

export const tabList = [
  PlayersTypes.BATSMAN,
  PlayersTypes.BOWLER,
  PlayersTypes.KEEPER,
  PlayersTypes.ALL_ROUNDER,
];

export const tabListToClassMap = {
  [PlayersTypes.BATSMAN]: 'batsman',
  [PlayersTypes.BOWLER]: 'bowler',
  [PlayersTypes.KEEPER]: 'keeper',
  [PlayersTypes.ALL_ROUNDER]: 'rounder',
};

export const formationPlayerTypes = {
  batsmen: 'batsman',
  bowlers: 'bowler',
  keepers: 'wicket_keeper',
  allRounders: 'all_rounder'
};

export const playerTypeEnum = {
  '1': 'batsmen',
  '2': 'bowlers',
  '3': 'keepers',
  '4': 'allRounders'
};

export const LeagueId = 2;