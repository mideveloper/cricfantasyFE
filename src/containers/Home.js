import React from 'react';
import Leaderboard from '../components/Leaderboard/index';
import GameSchedule from '../components/GameSchedule/index';
import TeamSquad from '../components/TeamSquad/index';
import Layout from '../layout/layout';

const Home = () => {
  return (
    <Layout>
      <Leaderboard />
      <GameSchedule />
      <TeamSquad />
    </Layout>
  );
};

export default Home;
