import React from "react";
import images from "../../styles/styles";

const HomeSlider = () => {
    return (
        <div>
            <section className="ftco-section ftco-home-slide img position-relative" style={images.home_cover}>
                
            </section>
            <div className="game-wrap-1 ftco-animate p-4 fadeInUp ftco-animated">
                <div className="row p-2">
                    <div className="col-md-6 pb-4 pb-lg-0 col-lg-3">
                        <div className="text d-flex">
                            <div className="team-name pl-3">
                                <h3><span>Cricket Fantasy League</span> <span></span></h3>
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
                            <p className="mb-0"><a href="/create-team" className="btn btn-primary py-3">Play</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;
