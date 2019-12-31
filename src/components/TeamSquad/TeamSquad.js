import React from "react";
import images from "../../styles/styles";

const TeamSquad = () => {
  return (
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
          <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
            <div className="carousel-team owl-carousel owl-loaded owl-drag">
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
  );
};

export default TeamSquad;
