import React from "react";
import images from "../../styles/styles";

const Leaderboard = () => {
  return (
    <section className="ftco-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="game-wrap-1 ftco-animate p-4 fadeInUp ftco-animated">
              <div className="row p-2">
                <div className="col-md-6 pb-4 pb-lg-0 col-lg-3">
                  <div className="text d-flex">
                    <div className="team-logo d-flex">
                      <div className="img" style={images.quetta}></div>
                      <div className="img img-2" style={images.karachi}></div>
                    </div>
                    <div className="team-name pl-3">
                      <h3>
                        <span>Cricket Fantasy League</span> <span></span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pb-4 pb-lg-0 col-lg-3">
                  <div className="text">
                    <div className="img"></div>
                    <h3 className="league">Pakistan Super League</h3>
                    <span>Count down</span>
                  </div>
                </div>
                <div className="col-md-6 pb-4 pb-lg-0 col-lg-4">
                  <div className="text">
                    <div id="timer" className="d-flex mb-0">
                      <div className="time" id="days"></div>
                      <div className="time pl-3" id="hours"></div>
                      <div className="time pl-3" id="minutes"></div>
                      <div className="time pl-3" id="seconds"></div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6 pb-4 pb-lg-0 col-lg-2">
                    <div className="text">
                      <p className="mb-0">
                        <a href="#" className="btn btn-primary py-3">
                          Play
                        </a>
                      </p>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
