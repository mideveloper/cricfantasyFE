import React, { useState, useEffect } from 'react';
import images from '../../styles/styles';

const Leaderboard = () => {

  const [leaderBoard, setLeaderBoard] = useState('');

  useEffect(() => {
    async function getLeaderBoard() {
      //const res = await httpService.get('match/schedule/2');
      //console.log(res);
      //setLeaderBoard(res.data.data);

      setLeaderBoard([]);
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
                    <tr key={board.userId}>
                      <td className="logo-team d-flex">{board.teamName}</td>
                      <td>{board.createBy}</td>
                      <td>{board.points}</td>
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
