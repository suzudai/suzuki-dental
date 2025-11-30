import React from 'react';
import './Hero.css';
import logoImage from '../assets/images/logo_horizontal.png';
import { FaTooth } from 'react-icons/fa';
import TodaysClinicHours from './TodaysClinicHours';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="bubble-container">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-text-area fade-in-up">
                    <h1 className="hero-main-copy">
                        地域の皆様に<br />
                        <span className="text-accent">寄り添う</span><br />
                        安心の歯科医療。
                    </h1>
                    <p className="hero-sub-copy">
                        <span className="location-badge">赤羽・志茂</span>
                    </p>
                </div>

                <div className="hero-visual-area">
                    <div className="hero-hours-card fade-in-up-delayed">
                        <h3 className="hero-hours-title">診療時間</h3>
                        <div className="hero-hours-table-wrapper">
                            <table className="hero-hours-table">
                                <thead>
                                    <tr>
                                        <th>時間</th>
                                        <th>月</th>
                                        <th>火</th>
                                        <th>水</th>
                                        <th>木</th>
                                        <th>金</th>
                                        <th>土</th>
                                        <th>日祝</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="time-col">9:30-13:00</td>
                                        <td><FaTooth className="tooth-icon" /></td>
                                        <td><FaTooth className="tooth-icon" /></td>
                                        <td><span className="cross">休</span></td>
                                        <td><FaTooth className="tooth-icon" /></td>
                                        <td><FaTooth className="tooth-icon" /></td>
                                        <td><FaTooth className="tooth-icon" /></td>
                                        <td><span className="cross">休</span></td>
                                    </tr>
                                    <tr>
                                        <td className="time-col">14:30-19:00</td>
                                        <td><FaTooth className="tooth-icon" /></td>
                                        <td><FaTooth className="tooth-icon" /></td>
                                        <td><span className="cross">休</span></td>
                                        <td><FaTooth className="tooth-icon" /></td>
                                        <td><FaTooth className="tooth-icon" /></td>
                                        <td><span className="cross">休</span></td>
                                        <td><span className="cross">休</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="hero-hours-note">※ 土曜午後は14:30~17:00まで</p>
                    </div>
                </div>
            </div>

            <div className="hero-logo-wrapper fade-in-up-delayed">
                <div className="desktop-tape-wrapper">
                    <TodaysClinicHours />
                </div>
                <img src={logoImage} alt="鈴木歯科医院" className="hero-logo" />
            </div>

            <div className="hero-waves">
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
                    </g>
                </svg>
            </div>

            <div className="hero-scroll-indicator">
                <span>SCROLL</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
