import React from "react";
import Layout from "../../layout/layout";

const CreateTeam = () => {
    return (
        <Layout>
        <section className="ftco-section mt-5 pb-0 team-filter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="filter-drop">
                            <h3>Formation</h3>
                            <div class="select">
                                <select name="slct" id="slct">
                                    <option selected disabled>Formation 1</option>
                                    <option value="1">Pure CSS</option>
                                    <option value="2">No JS</option>
                                    <option value="3">Nice!</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="filter-drop">
                            <h3>All Teams</h3>
                            <div class="select">
                                <select name="slct" id="slct">
                                    <option selected disabled>Karachi</option>
                                    <option value="1">Pure CSS</option>
                                    <option value="2">No JS</option>
                                    <option value="3">Nice!</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="filter-drop">
                            <h3>Total Budget</h3>
                            <h2>100 CR</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="batsman-tab" data-toggle="tab" href="#batsman" role="tab" aria-controls="batsman" aria-selected="true">Batsman</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="bowler-tab" data-toggle="tab" href="#bowler" role="tab" aria-controls="bowler" aria-selected="false">Bowler</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="keeper-tab" data-toggle="tab" href="#keeper" role="tab" aria-controls="keeper" aria-selected="false">Keeper</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="rounder-tab" data-toggle="tab" href="#rounder" role="tab" aria-controls="rounder" aria-selected="false">All Rounder</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="batsman" role="tabpanel" aria-labelledby="batsman-tab">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="player-detail-tab">
                                        KK Babar Azam
                </div>
                                </div>
                                <div className="col-lg-4"></div>
                                <div className="col-lg-4"></div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="bowler" role="tabpanel" aria-labelledby="bowler-tab">...</div>
                        <div class="tab-pane fade" id="keeper" role="tabpanel" aria-labelledby="keeper-tab">...</div>
                        <div class="tab-pane fade" id="rounder" role="tabpanel" aria-labelledby="rounder-tab">...</div>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    );
};

export default CreateTeam;
