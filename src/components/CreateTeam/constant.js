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