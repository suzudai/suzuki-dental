import React from 'react';
import Philosophy from '../components/Philosophy';
import './About.css';
import clinicReception from '../assets/images/clinic-reception.jpg';
import clinicWaiting from '../assets/images/clinic-waiting.jpg';
import clinicTreatmentRoom from '../assets/images/clinic-treatment-room.jpg';

const About = () => {
    return (
        <main className="page-content">
            <div className="page-header">
                <div className="container">
                    <h1>当院について</h1>
                    <p>About Us</p>
                </div>
            </div>
            <Philosophy />

            <section className="clinic-tour-section">
                <div className="container">
                    <h2 className="section-title">院内紹介</h2>
                    <div className="tour-grid">
                        <div className="tour-item">
                            <img src={clinicReception} alt="受付" className="tour-image" />
                            <h3>受付</h3>
                            <p>明るく開放的な受付で、スタッフが笑顔でお迎えいたします。</p>
                        </div>
                        <div className="tour-item">
                            <img src={clinicWaiting} alt="待合室" className="tour-image" />
                            <h3>待合室</h3>
                            <p>リラックスしてお待ちいただけるよう、清潔で落ち着いた空間づくりを心がけています。</p>
                        </div>
                        <div className="tour-item">
                            <img src={clinicTreatmentRoom} alt="診療室" className="tour-image" />
                            <h3>診療室</h3>
                            <p>プライバシーに配慮した診療室で、安心して治療を受けていただけます。</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
