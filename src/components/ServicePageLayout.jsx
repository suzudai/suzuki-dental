import React from 'react';
import { Link } from 'react-router-dom';
import WaveDivider from './WaveDivider';
import './ServicePageLayout.css';

const ServicePageLayout = ({ title, children }) => {
    return (
        <div className="service-page">
            <div className="service-hero">
                <div className="container">
                    <h1 className="service-hero-title fade-in-up">{title}</h1>
                    <div className="breadcrumb fade-in-up delay-1">
                        <Link to="/">ホーム</Link> &gt; <Link to="/services">診療案内</Link> &gt; <span>{title}</span>
                    </div>
                </div>
                <div className="hero-wave">
                    <WaveDivider isBottom={true} />
                </div>
            </div>

            <div className="service-content-wrapper">
                <div className="container">
                    <div className="service-content fade-in-up delay-2">
                        {children}
                    </div>

                    <div className="service-navigation fade-in-up delay-3">
                        <Link to="/services" className="btn-secondary">&larr; 診療案内一覧に戻る</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePageLayout;
