import React from 'react';
import './Hero.css';

import treatmentRoom from '../assets/images/clinic-treatment-room.jpg';
import waitingRoom from '../assets/images/clinic-waiting.jpg';

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

            <div className="hero-content-wrapper">
                <div className="hero-content float-anim">
                    <h1 className="hero-title">
                        赤羽・志茂
                        <br />
                        地域に密着した
                        <br />
                        歯科医院
                    </h1>
                    <p className="hero-subtitle">
                        鈴木歯科医院
                    </p>
                </div>
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
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f0f8ff" />
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
