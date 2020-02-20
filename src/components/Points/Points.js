import React from "react";
import images from "../../styles/styles";

const Points = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-12 pl-lg-12 py-12">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                <h2 className="mb-4">Points will be awarded on the following basis in Cricket Fantasy</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4>Batsman</h4>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Scoring 1 run = +1 point</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Scoring a 30 = +20 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Scoring a 50 = +50 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Scoring a 100 = +150 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; On Batting Strike Rate Less than 100 = -10 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; On Batting Strike Rate between 100 to 150 = +10 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; On Batting Strike Rate between 150.01 to 200 = +20 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; On Batting Strike Rate above 200.01 = +30 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; On Getting Out = -5 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; On Hitting a six = +6 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; On Hitting a four = +4 points</p>
                {/* <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Scoring a Duck = -5 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Scoring a Golden Duck = -10 points</p> */}
                <br />

                <h4>Bowler</h4>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Bowler Getting a wicket = +20 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Bowler Getting a Four wicket haul = +150 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Bowler Getting a Five Wicket Haul = +200 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Bowler’s Bowling economy less than or equall to 6 = +30 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Bowler’s Bowling economy greater than 6 and less than or equal to 7 = +15 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Bowler’s Bowling economy greater than or equal to 8 and less than or equal to 9 = -10 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Bowler’s Bowling economy greater than 9 = -20 points</p>
                {/* <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Bowler getting a hat-trick = +200 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Bowling a wide ball = -1 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Bowling a no ball = -2 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Bowling a maiden over = +30 points</p> */}
                <br />

                {/* <h4>Fielder/WicketKeeper</h4>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; On taking a catch = +10 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Wicketkeeper’s 1 stump = +10 points</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Run out by Player = +10 points</p>
                <br /><br /> */}

                {/* <h4>Bonus</h4>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Captain x2 points (Captain’s attained points are doubled)</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; <b>If Your selected Player is awarded Man Of the Match then You get 3x points for him</b></p>
                <br /><br /> */}

                <h4>Notes</h4>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Substitutes will not be awarded any points.</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; Changing captain and Man of the Match will not be counted as a transfer.</p>
                <p>&nbsp; &nbsp;<span class="glyphicon glyphicon-hand-right"></span>&nbsp;&nbsp; <b>No Extra Transfers for Play-offs</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Points;
