import React, { useState, useEffect } from 'react';
import CustomSlider from '../common/CustomSlider/index';
import httpService from '../../utils/httpService';
import utilService from '../../utils/utilService';

const GameSchedule = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  const [matchSchedule, setMatchSchedule] = useState('');

  useEffect(() => {
    async function getAllMatches() {
      const res = await httpService.get('match/schedule/2');
      if (res && res.data && res.data.data) {
        setMatchSchedule(res.data.data);
      }
    }
    getAllMatches();
  }, []);

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Upcoming Games</span>
              <h2 className="mb-4">Game Schedule PSL</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CustomSlider settings={settings}>
          {matchSchedule &&
            matchSchedule.map(schedule => (
              <div className="container" key={schedule.id}>
                <div className="row">
                  <div className="col-lg-12 mb-4" key={schedule.id}>
                    <div className="scoreboard mb-5 mb-lg-0 game-report">
                      <div className="divider text-center">
                        <span>{schedule.stadium}</span>
                      </div>
                      <div className="d-sm-flex mb-1">
                        <div className="sport-team d-flex align-items-center justify-content-center">
                          <div>
                            <div className="text-center">
                              <h1>{utilService.getTeamInitails(schedule.team_1)}</h1>
                            </div>
                            <div className="text-center d-flex px-0 px-md-0 ">
                              {schedule.team_1_score && (
                                <p>
                                  <h4 className="team-name">{schedule.team_1_score}</h4>
                                  <h4 className="team-name">{schedule.team_1_overs}</h4>
                                </p>
                              )}
                              {!schedule.team_1_score && (
                                <p>
                                  <h4 className="team-name">{schedule.team_1}</h4>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="sport-team d-flex vsWd align-items-center justify-content-center">
                          <h3>VS</h3>
                        </div>
                        <div className="sport-team d-flex align-items-center justify-content-center">
                          <div>
                            <div className="text-center">
                              <h1>{utilService.getTeamInitails(schedule.team_2)}</h1>
                            </div>
                            <div className="text-center d-flex px-0 px-md-0 ">
                              {schedule.team_2_score && (
                                <p>
                                  <h4 className="team-name">{schedule.team_2_score}</h4>
                                  <h4 className="team-name">{schedule.team_2_overs}</h4>
                                </p>
                              )}
                              {!schedule.team_2_score && (
                                <p>
                                  <h4 className="team-name">{schedule.team_2}</h4>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center date">
                        <p>{utilService.getDateInString(schedule.play_date)} - {schedule.play_time}</p>
                        {schedule.match_result && (
                          <p>{schedule.match_result}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </CustomSlider>
      </div>
      {!matchSchedule && (
        <div className="text-center">
          <h1>No Matches Available</h1>
        </div>
      )}
    </section>
  );
};

export default GameSchedule;
