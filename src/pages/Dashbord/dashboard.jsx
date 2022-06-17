import React, { Component } from 'react'
import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer'

import "./dashboard.css"

import Option from "../../assets/img/icons/option.png"
import Admin from "../../assets/img/adminpict.png"

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className='db-global-container'>
                    <div className="db-title">See how your store progress so far</div>
                    <div className="db-bullet-title-container">
                        <div className="db-inactive-bullet-title-container">
                            <div className="db-active-bullet"></div>
                            <div className="db-active-title">Daily</div>
                        </div>
                        <div className="db-inactive-bullet-title-container">
                            <div className="db-inactive-bullet"></div>
                            <div className="db-inactive-title">Weekly</div>
                        </div>
                        <div className="db-inactive-bullet-title-container">
                            <div className="db-inactive-bullet"></div>
                            <div className="db-inactive-title">Monthly</div>
                        </div>
                    </div>
                    <div className="db-main-card-container">
                        <div className="db-main-card">
                            <div className="db-main-title-container">
                                <div className="db-main-title">Monthly Report</div>
                                <div className="db-main-options"><img src={Option} alt="option" /></div>
                            </div>
                            <div className="db-main-subtitle">Last 7 Days</div>
                            <div className="db-chart-container">
                                <div className="db-chart-left-label">
                                    <div className="db-chart-left-item">1M</div>
                                    <div className="db-chart-left-item">0.5M</div>
                                    <div className="db-chart-left-item">0K</div>
                                    <div className="db-chart-left-item">1M</div>
                                    <div className="db-chart-left-item"></div>
                                </div>
                                <div className="db-mainchart">
                                    <div className="db-chart-column">
                                        <div className="db-chart-column-positive">
                                            <div className="db-chart-column-positive-bar" style={{ height: "20%" }}></div>
                                        </div>
                                        <div className="db-chart-column-negative">
                                            <div className="db-chart-column-negative-bar" style={{ height: "80%" }}></div>
                                        </div>
                                        <div className="db-chart-column-bottom-label">Mon</div>
                                    </div>
                                    <div className="db-chart-column">
                                        <div className="db-chart-column-positive">
                                            <div className="db-chart-column-positive-bar" style={{ height: "80%" }}></div>
                                        </div>
                                        <div className="db-chart-column-negative">
                                            <div className="db-chart-column-negative-bar" style={{ height: "60%" }}></div>
                                        </div>
                                        <div className="db-chart-column-bottom-label">Tue</div>
                                    </div>
                                    <div className="db-chart-column">
                                        <div className="db-chart-column-positive">
                                            <div className="db-chart-column-positive-bar" style={{ height: "60%" }}></div>
                                        </div>
                                        <div className="db-chart-column-negative">
                                            <div className="db-chart-column-negative-bar" style={{ height: "40%" }}></div>
                                        </div>
                                        <div className="db-chart-column-bottom-label">Wed</div>
                                    </div>
                                    <div className="db-chart-column">
                                        <div className="db-chart-column-positive">
                                            <div className="db-chart-column-positive-bar" style={{ height: "50%" }}></div>
                                        </div>
                                        <div className="db-chart-column-negative">
                                            <div className="db-chart-column-negative-bar" style={{ height: "20%" }}></div>
                                        </div>
                                        <div className="db-chart-column-bottom-label">Thur</div>
                                    </div>
                                    <div className="db-chart-column">
                                        <div className="db-chart-column-positive">
                                            <div className="db-chart-column-positive-bar" style={{ height: "45%" }}></div>
                                        </div>
                                        <div className="db-chart-column-negative">
                                            <div className="db-chart-column-negative-bar" style={{ height: "40%" }}></div>
                                        </div>
                                        <div className="db-chart-column-bottom-label">Fri</div>
                                    </div>
                                    <div className="db-chart-column">
                                        <div className="db-chart-column-positive">
                                            <div className="db-chart-column-positive-bar" style={{ height: "65%" }}></div>
                                        </div>
                                        <div className="db-chart-column-negative">
                                            <div className="db-chart-column-negative-bar" style={{ height: "50%" }}></div>
                                        </div>
                                        <div className="db-chart-column-bottom-label">Sat</div>
                                    </div>
                                    <div className="db-chart-column">
                                        <div className="db-chart-column-positive">
                                            <div className="db-chart-column-positive-bar" style={{ height: "100%" }}></div>
                                        </div>
                                        <div className="db-chart-column-negative">
                                            <div className="db-chart-column-negative-bar" style={{ height: "50%" }}></div>
                                        </div>
                                        <div className="db-chart-column-bottom-label">Sun</div>
                                    </div>
                                </div>
                            </div>
                            <div className="db-main-note">
                                <div className="db-note"><div className="db-note-bullet-income"></div> Income</div>
                                <div className="db-note"><div className="db-note-bullet-outcome"></div> Outcome</div>
                            </div>
                        </div>
                        <aside className="db-aside-card-container">
                            <div className="db-aside-card-top">
                                <div className="db-admin-profile">
                                    <div className="db-admin-pict-container"><img src={Admin} alt="admin" className='db-admin-pict' /></div>
                                    <div className="db-admin-name-container">
                                        <div className="db-admin-name">Cheryn Laurent <br />
                                            <span> Keep up the good work and spread love!</span></div>
                                    </div>
                                </div>
                                <div className="db-staff-performa">
                                    <div className="db-staff-performa-title">Best Staff of the Month</div>
                                    <div className="db-staff-performa-donut">80%</div>
                                    <div className="db-staff-performa-note">Achieved 3.5M of total 478 Customer</div>
                                </div>
                            </div>
                            <div className="db-aside-card-bottom">
                                <div className="db-goals-title">Goals</div>
                                <div className="db-goals-subtitle">Your goals is still on 76%. Keep up the good work!</div>
                                <div className="db-goals-donut">76%</div>
                                <div className="db-goals-tridot">
                                    <div className="goals-dot-active"></div>
                                    <div className="goals-dot-inactive"></div>
                                    <div className="goals-dot-inactive"></div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="db-button-container">
                        <div className="db-download-button">Download Report</div>
                        <div className="db-share-button">Share Report</div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Dashboard