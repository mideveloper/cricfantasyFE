import React from 'react';
import images from '../../styles/styles';

const Leaderboard = () => {
  return (
    <>
      <section className="ftco-section mt-5 pb-0 leaderboard">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-12 heading-section d-flex align-items-center justify-content-between ftco-animate fadeInUp ftco-animated">
              <div>
                <span className="subheading">Top Teams</span>
                <h2 className="mb-4">Leaderboard</h2>
              </div>
              <div>
                <form className="searchBar">
                  <input type="text" placeholder="Search by team name"></input>
                  <button></button>
                </form>
              </div>
            </div>
            <div className="" style={{ width: '100%' }}>
              <table className="table table-league">
                <thead>
                  <tr>
                    <th>Team Name</th>
                    <th>Created By</th>
                    <th>Games Played</th>
                    <th>Total Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="logo-team d-flex">
                      <div className="img logo" style={images.person1}></div>Knight
                      Warriors lorem ispum dolor et
								</td>
                    <td>Muhammad Ali Siddiqui</td>
                    <td>14</td>
                    <td>2340</td>
                  </tr>
                  <tr>
                    <td className="logo-team d-flex">
                      <div className="img logo" style={images.person1}></div>Knight
                      Warriors lorem ispum dolor et
								</td>
                    <td>Muhammad Ali Siddiqui</td>
                    <td>14</td>
                    <td>2340</td>
                  </tr>
                  <tr>
                    <td className="logo-team d-flex">
                      <div className="img logo" style={images.person1}></div>Knight
                      Warriors lorem ispum dolor et
								</td>
                    <td>Muhammad Ali Siddiqui</td>
                    <td>14</td>
                    <td>2340</td>
                  </tr>
                  <tr>
                    <td className="logo-team d-flex">
                      <div className="img logo" style={images.person1}></div>Knight
                      Warriors lorem ispum dolor et
								</td>
                    <td>Muhammad Ali Siddiqui</td>
                    <td>14</td>
                    <td>2340</td>
                  </tr>
                  <tr>
                    <td className="logo-team d-flex">
                      <div className="img logo" style={images.person1}></div>Knight
                      Warriors lorem ispum dolor et
								</td>
                    <td>Muhammad Ali Siddiqui</td>
                    <td>14</td>
                    <td>2340</td>
                  </tr>
                  <tr>
                    <td className="logo-team d-flex">
                      <div className="img logo" style={images.person1}></div>Knight
                      Warriors lorem ispum dolor et
								</td>
                    <td>Muhammad Ali Siddiqui</td>
                    <td>14</td>
                    <td>2340</td>
                  </tr>
                  <tr>
                    <td className="logo-team d-flex">
                      <div className="img logo" style={images.person1}></div>Knight
                      Warriors lorem ispum dolor et
								</td>
                    <td>Muhammad Ali Siddiqui</td>
                    <td>14</td>
                    <td>2340</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="align-center">
                <p><a href="#" className="btn btn-link shadow-none">View All</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="quickScore active">
          <div className="exclamation">i</div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <div className="sport-team">
              <div className="text-center d-flex px-0 px-md-0">
                <h4 className="team-name truncate">Knight Warrior</h4>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-around mb-0">
            <div className="sport-team">
              <span>Current Score</span>
              <h3>2130 PTS</h3>
            </div>
            <div className="sport-team separator"></div>
            <div className="sport-team">
              <span>Current Score</span>
              <h3>2130 PTS</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leaderboard;
