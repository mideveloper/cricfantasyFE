import React from 'react';
import Leaderboard from '../components/Leaderboard/index';
import GameSchedule from '../components/GameSchedule/index';
import TeamSquad from '../components/TeamSquad/index';
import Layout from '../layout/layout';
import HomeSlider from '../components/HomeSlider';

const Home = () => {
  return (
    <Layout>
      <HomeSlider />
      <Leaderboard />
      <GameSchedule />
    </Layout>
  );
};

export default Home;
