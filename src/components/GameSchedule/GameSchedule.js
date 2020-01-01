import React from "react";
import images from "../../styles/styles";

const GameSchedule = () => {
  return (
    <section className="ftco-section ftco-game-schedule ftco-no-pt">
      <div className="container">
        <div className="row">
          <div className="col-md-12 heading-section ftco-animate mb-4 fadeInUp ftco-animated">
            <h1>Game Schedule</h1>
          </div>
        </div>
        <div className="row ftco-animate fadeInUp ftco-animated">
          <div className="col-md-12 carousel-game-schedule owl-carousel owl-loaded owl-drag">
            <div className="item">
              <div className="game-schedule">
                <div className="sport-team d-flex align-items-center">
                  <div className="img logo" style={images.team1}></div>
                  <div className="pl-4 desc">
                    <span className="venue">Home @ Arena</span>
                    <h4 className="team-name">Knight Warrior</h4>
                    <span className="date">April 17, 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="game-schedule">
                <div className="sport-team d-flex align-items-center">
                  <div className="img logo" style={images.team2}></div>
                  <div className="pl-4 desc">
                    <span className="venue">Home @ Arena</span>
                    <h4 className="team-name">Knight Warrior</h4>
                    <span className="date">April 17, 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="game-schedule">
                <div className="sport-team d-flex align-items-center">
                  <div className="img logo" style={images.team3}></div>
                  <div className="pl-4 desc">
                    <span className="venue">Home @ Arena</span>
                    <h4 className="team-name">Knight Warrior</h4>
                    <span className="date">April 17, 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="game-schedule">
                <div className="sport-team d-flex align-items-center">
                  <div className="img logo" style={images.team4}></div>
                  <div className="pl-4 desc">
                    <span className="venue">Home @ Arena</span>
                    <h4 className="team-name">Knight Warrior</h4>
                    <span className="date">April 17, 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="game-schedule">
                <div className="sport-team d-flex align-items-center">
                  <div className="img logo" style={images.team5}></div>
                  <div className="pl-4 desc">
                    <span className="venue">Home @ Arena</span>
                    <h4 className="team-name">Knight Warrior</h4>
                    <span className="date">April 17, 2018</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="game-schedule">
                <div className="sport-team d-flex align-items-center">
                  <div className="img logo" style={images.team6}></div>
                  <div className="pl-4 desc">
                    <span className="venue">Home @ Arena</span>
                    <h4 className="team-name">Knight Warrior</h4>
                    <span className="date">April 17, 2018</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSchedule;
