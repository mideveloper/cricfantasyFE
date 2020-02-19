import React, { useState, useEffect } from 'react';
import httpService from '../../utils/httpService';

const Leaderboard = () => {

  const [leaderBoard, setLeaderBoard] = useState('');

  useEffect(() => {
    async function getLeaderBoard() {
      setLeaderBoard([]);
      const res = await httpService.get('leagues/2/leaderboard');
      if (res && res.data && res.data.data) {
        setLeaderBoard(res.data.data);
      }
    }
    getLeaderBoard();
  }, []);


  return (
    <>
      <section className="ftco-section pb-0 leaderboard">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-12 heading-section d-flex align-items-center justify-content-between ftco-animate fadeInUp ftco-animated">
              <div>
                <span className="subheading">Top Teams</span>
                <h2 className="mb-4">Leaderboard</h2>
              </div>
            </div>
            <div className="" style={{ width: '100%' }}>
              <table className="table table-league">
                <thead>
                  <tr>
                    <th>Team Name</th>
                    <th>Created By</th>
                    <th>Total Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderBoard && leaderBoard.map(board => (
                    <tr key={board.id}>
                      <td className="logo-team d-flex">{board.name}</td>
                      <td>{board.user_name}</td>
                      <td>{board.points || 0}</td>
                    </tr>
                  ))}
                  {(!leaderBoard || !leaderBoard.length) && (
                    <tr>
                      <td colSpan="4">No Leaderboard Available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leaderboard;
