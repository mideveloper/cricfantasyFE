import React from "react";
import images from "../../styles/styles";

const About = () => {
  return (
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
                <h2 className="mb-4">About the Cricket Fantasy League Team</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia Even the all-powerful
                  Pointing has no control about the blind texts it is an almost
                  unorthographic life One day however a small line of blind text
                  by the name of Lorem Ipsum decided to leave for the far World
                  of Grammar.
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
  );
};

export default About;
