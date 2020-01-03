import React from "react";
import images from "../../styles/styles";

const Leaderboard = () => {
  return (
    <section className="ftco-section mt-5 pb-0 leaderboard">
      <div className="container">
        <div className="row">
          <div className="heading-section ftco-animate">
            <span className="subheading">Top Teams</span>
            <h2 className="mb-4">Leaderboard</h2>
          </div>
          <div className="" style={{width: '100%'}}>
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
    </section>
  );
};

export default Leaderboard;
