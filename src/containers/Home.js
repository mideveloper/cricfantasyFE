import React from "react";
import images from "../styles/styles";

const Home = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <span>Cricket Fantasy League</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="about.html" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="games.html" className="nav-link">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a href="blog.html" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item cta">
                <a href="#" className="nav-link">
                  Play
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="hero-wrap js-fullheight"
        style={images.bg1}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center justify-content-end"
            data-scrollax-parent="true"
            style={{ height: "625px" }}
          >
            <div
              className="col-md-7 ftco-animate mt-5 fadeInUp ftco-animated"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                className="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                How long can you last?
              </h1>
              <p
                className="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section ftco-no-pb ftco-no-pt">
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
                  <div className="col-md-6 pb-4 pb-lg-0 col-lg-2">
                    <div className="text">
                      <p className="mb-0">
                        <a href="#" className="btn btn-primary py-3">
                          Play
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading-section ftco-animate fadeInUp ftco-animated">
                <span className="subheading">Game Report</span>
                <h2 className="mb-4">Great Win In Final Game</h2>
              </div>
              <div className="scoreboard mb-5 mb-lg-0">
                <div className="divider text-center">
                  <span>Tue. Feb 21, 2019; FIFA Champions League</span>
                </div>
                <div className="d-sm-flex mb-4">
                  <div className="sport-team d-flex align-items-center">
                    <div className="img logo" style={images.team1}></div>
                    <div className="text-center px-1 px-md-3 desc">
                      <h3 className="score win">
                        <span>3</span>
                      </h3>
                      <h4 className="team-name">Knight Warrior</h4>
                    </div>
                  </div>
                  <div className="sport-team d-flex align-items-center">
                    <div
                      className="img logo order-sm-last"
                      style={images.team2}
                    ></div>
                    <div className="text-center px-1 px-md-3 desc">
                      <h3 className="score lost">
                        <span>1</span>
                      </h3>
                      <h4 className="team-name">Mighty Falcons</h4>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p>
                    <a href="#" className="btn btn-primary">
                      More Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-stretch">
              <div
                className="img d-flex align-items-center justify-content-center py-5"
                style={images.victory}
              >
                <p className="text-center mb-0 py-5">
                  <a
                    href="https://vimeo.com/45830194"
                    className="icon-video-2 popup-vimeo d-flex justify-content-center align-items-center mr-3"
                  >
                    <span className="ion-ios-play"></span>
                  </a>
                  <small
                    style={{ color: "rgba(255,255,255,1)", fontSize: "16px" }}
                  >
                    {" "}
                    Watch Highlights
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-game-schedule ftco-no-pt">
        <div className="container">
          <div className="row">
            <div className="col-md-12 heading-section ftco-animate mb-4 fadeInUp ftco-animated">
              <span className="subheading">Game Schedule</span>
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

      <section className="ftco-section services-section bg-light">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-6 services d-flex">
                <div className="icon">
                  <span className="flaticon-american-football"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Senior Team</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-6 services d-flex">
                <div className="icon">
                  <span className="flaticon-american-football-1"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">For Kids</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-6 services d-flex">
                <div className="icon">
                  <span className="flaticon-lockers"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Football Schools</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div className="media block-6 services d-flex">
                <div className="icon">
                  <span className="flaticon-strategy"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">Basic Tactics</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section ftco-team img"
        style={images.bg3}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-6 heading-section heading-section-white text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Team Squad</span>
              <h2 className="mb-4">
                Our Team <span>Squad</span>
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div className="carousel-team owl-carousel">
                <div className="item">
                  <div className="team-wrap text-center">
                    <div className="img" style={images.staff1}></div>
                    <div className="text">
                      <h3 className="mb-0">David Scott</h3>
                      <span className="position">Wide Receiver</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team-wrap text-center">
                    <div className="img" style={images.staff2}></div>
                    <div className="text">
                      <h3 className="mb-0">David Scott</h3>
                      <span className="position">Tight End</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team-wrap text-center">
                    <div className="img" style={images.staff3}></div>
                    <div className="text">
                      <h3 className="mb-0">David Scott</h3>
                      <span className="position">Defensive</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team-wrap text-center">
                    <div className="img" style={images.staff4}></div>
                    <div className="text">
                      <h3 className="mb-0">David Scott</h3>
                      <span className="position">Quarterback</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team-wrap text-center">
                    <div className="img" style={images.staff5}></div>
                    <div className="text">
                      <h3 className="mb-0">David Scott</h3>
                      <span className="position">Runing Back</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team-wrap text-center">
                    <div className="img" style={images.staff6}></div>
                    <div className="text">
                      <h3 className="mb-0">David Scott</h3>
                      <span className="position">Center</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="team-wrap text-center">
                    <div className="img" style={images.staff7}></div>
                    <div className="text">
                      <h3 className="mb-0">David Scott</h3>
                      <span className="position">Offensive Guard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
        id="section-counter"
      >
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 d-flex">
              <div
                className="img d-flex align-self-stretch"
                style={images.about}
              ></div>
            </div>
            <div className="col-md-6 pl-lg-5 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                  <h2 className="mb-4">
                    About the Cricket Fantasy League Team
                  </h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia Even the all-powerful
                    Pointing has no control about the blind texts it is an
                    almost unorthographic life One day however a small line of
                    blind text by the name of Lorem Ipsum decided to leave for
                    the far World of Grammar.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                  <div className="block-18 text-center py-3 bg-light mb-4">
                    <div className="text">
                      <strong className="number" data-number="100">
                        0
                      </strong>
                      <span>Sixes</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                  <div className="block-18 text-center py-3 bg-light mb-4">
                    <div className="text">
                      <strong className="number" data-number="10">
                        0
                      </strong>
                      <span>Hattricks</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                  <div className="block-18 text-center py-3 bg-light mb-4">
                    <div className="text">
                      <strong className="number" data-number="20">
                        0
                      </strong>
                      <span>Catches</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                  <div className="block-18 text-center py-3 bg-light mb-4">
                    <div className="text">
                      <strong className="number" data-number="80">
                        0
                      </strong>
                      <span>Runs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section testimony-section"
        style={images.bg2}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-4">Happy Viewers</h2>
            </div>
          </div>
          <div className="row ftco-animate justify-content-center">
            <div className="col-md-7">
              <div className="carousel-testimony owl-carousel ftco-owl">
                <div className="item">
                  <div className="testimony-wrap text-center py-4 pb-5">
                    <div className="user-img mb-4" style={images.person1}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text p-3">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Arthur Browner</p>
                      <span className="position">Viewer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center py-4 pb-5">
                    <div className="user-img mb-4" style={images.person2}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text p-3">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Arthur Browner</p>
                      <span className="position">Viewer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center py-4 pb-5">
                    <div className="user-img mb-4" style={images.person3}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text p-3">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Arthur Browner</p>
                      <span className="position">Viewer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center py-4 pb-5">
                    <div className="user-img mb-4" style={images.person4}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text p-3">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Arthur Browner</p>
                      <span className="position">Viewer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap text-center py-4 pb-5">
                    <div className="user-img mb-4" style={images.person3}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text p-3">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Arthur Browner</p>
                      <span className="position">Viewer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Blog</span>
              <h2>Recent News</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry justify-content-end">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={images.image1}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center p-2 pr-3 mb-4 topp">
                    <div className="one">
                      <span className="day mr-1">08</span>
                    </div>
                    <div className="two">
                      <span className="yr">2019</span>
                      <span className="mos">March</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry justify-content-end">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={images.image2}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center p-2 pr-3 mb-4 topp">
                    <div className="one">
                      <span className="day mr-1">07</span>
                    </div>
                    <div className="two">
                      <span className="yr">2019</span>
                      <span className="mos">March</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={images.image3}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center p-2 mb-4 topp">
                    <div className="one">
                      <span className="day mr-1">07</span>
                    </div>
                    <div className="two">
                      <span className="yr">2019</span>
                      <span className="mos">March</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={images.image4}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center p-2 pr-3 mb-4 topp">
                    <div className="one">
                      <span className="day mr-1">06</span>
                    </div>
                    <div className="two">
                      <span className="yr">2019</span>
                      <span className="mos">March</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-subscribe img" style={images.bg1}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 text-wrap text-center heading-section heading-section-white ftco-animate">
              <h2>Subcribe to our upcoming match</h2>
              <div className="row d-flex justify-content-center mt-4 mb-4">
                <div className="col-md-10">
                  <form action="#" className="subscribe-form">
                    <div className="form-group d-flex">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email address"
                      />
                      <input
                        type="submit"
                        value="Subscribe"
                        className="submit px-3"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="ftco-footer ftco-footer-2 ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Cricket Fantasy League</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone"></span>
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center"></div>
          </div>
        </div>
      </footer>

      {/* <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            strokeMiterlimit="10"
            stroke="#F96D00"
          />
        </svg>
      </div> */}
    </>
  );
};

export default Home;
