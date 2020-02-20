import React from "react";
import images from "../../styles/styles";

const About = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-12 pl-lg-12 py-12">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                <h2 className="mb-4">Welcome! We are so excited to announce in house PSL- Fantasy League at 10Pearls</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h3>Steps to use Fantasy League App</h3>
                <ul>
                  <li>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Click on the ‘Play’ button for Team Creation</li>
                  <li>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Log in with your COGS username and password</li>
                  <li>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Enter Team name (e.g: Shaheen 11)</li>
                  <li>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Select formation 1/2/3, each formation has their unique criteria for players selection (like how many batsmen, bowler, keeper, all-rounder you can select within your allotted points)
                    <small><i>TIP: I would suggest you play around the formation, and keep an eye on the pitch below to see the difference</i></small>
                  </li>
                  <li>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Select Team. You can create your own team by selecting any member from multiple teams</li>
                  <li>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; After selecting the team, a list of players will be displayed those players can be selected</li>
                  <li>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; The selected player will be displayed on the pitch below</li>
                  <li>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Once you have done your team selection Click on ‘Create Team’ button besides team name box**</li>
                  <li>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Voila, your team is now created. Keep an eye on the Leaderboards (Home page) to view your team.</li>
                </ul>

                <h4>** You can make changes until the LIVE PSL League starts. Please note NO CHANGES will be allowed after that, therefore, choose your players wisely </h4>

                <br />

                <h3>Points Calculation</h3>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; The points will be updated after every match based on your team performance</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp;  You can see point calculation on <a href="http://10.0.0.23/points">Points</a> Tab</p>

                <h3>It does not end here. We will Pick and choose some of our Fantasy Teams to GO and WATCH their selected players LIVE in the stadium
                So what are you waiting for, click PLAY to begin!!!. </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
