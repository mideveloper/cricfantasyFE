import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import images from '../../styles/styles';
import httpService from '../../utils/httpService';
import utilService from '../../utils/utilService';

const GameSchedule = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'darkgray' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'darkgray' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [matchSchedule, setMatchSchedule] = useState('');

  useEffect(() => {
    async function getAllMatches() {
      const res = await httpService.get('matches/schedule/2');
      console.log(res);
      setMatchSchedule(res.data.data);
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
              <h2 className="mb-4">Game Schedule</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Slider {...settings}>
          {matchSchedule &&
            matchSchedule.map(schedule => (
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 mb-4" key={schedule.id}>
                    <div className="scoreboard mb-5 mb-lg-0 game-report">
                      <div className="divider text-center">
                        <span>PSL</span>
                      </div>
                      <div className="d-sm-flex mb-1">
                        <div className="sport-team d-flex align-items-center justify-content-center">
                          <div>
                            <div className="text-center">
                              <h1>{schedule.team_1.charAt(0)}</h1>
                            </div>
                            {/* <div className="img logo m-auto" style={images.person1}></div> */}
                            <div className="text-center d-flex px-0 px-md-0 ">
                              <h4 className="team-name">{schedule.team_1}</h4>
                            </div>
                          </div>
                        </div>
                        <div className="sport-team d-flex vsWd align-items-center justify-content-center">
                          <h3>VS</h3>
                        </div>
                        <div className="sport-team d-flex align-items-center justify-content-center">
                          <div>
                            <div className="text-center">
                              <h1>{schedule.team_2.charAt(0).toUpperCase()}</h1>
                            </div>
                            {/* <div
                          className="img logo m-auto order-sm-last"
                          style={images.person1}
                        ></div> */}
                            <div className="text-center d-flex px-0 px-md-0 ">
                              <h4 className="team-name">{schedule.team_2}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center date">
                        <p>{utilService.getDateInString(schedule.play_date)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
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
