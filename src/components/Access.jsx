import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaTrain, FaBus } from 'react-icons/fa';
import './Access.css';

import clinicExterior from '../assets/images/clinic-exterior.jpg';

const Access = ({ showTitle = true }) => {
    return (
        <section id="access" className="access-section">
            <div className="container">
                {showTitle && <h2 className="section-title fade-in-up">アクセス</h2>}

                <div className="access-image-container fade-in-up">
                    <img src={clinicExterior} alt="鈴木歯科医院 外観" className="access-exterior-image" />
                </div>

                <div className="access-content">
                    <div className="access-info fade-in-up">
                        <div className="info-item">
                            <h3><FaMapMarkerAlt className="access-icon" /> 住所</h3>
                            <p>〒115-0042<br />東京都北区志茂2-41-13 ニュー岩瀬1F</p>
                        </div>

                        <div className="info-item">
                            <h3><FaPhone className="access-icon" /> 電話番号</h3>
                            <p className="phone-number">03-3902-5564</p>
                            <p className="note">※予約制 (随時急患受付)</p>
                        </div>

                        <div className="info-item">
                            <h3><FaTrain className="access-icon" /> 電車でお越しの方</h3>
                            <p>JR線 赤羽駅 徒歩10分（650m）</p>
                            <p>東京メトロ南北線 志茂駅 徒歩8分（550m）</p>
                        </div>

                        <div className="info-item">
                            <h3><FaBus className="access-icon" /> バスでお越しの方</h3>
                            <p>都営バス 志茂二丁目 徒歩4分（300m）</p>
                        </div>


                    </div>

                    <div className="access-map fade-in-up delay-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.684796268566!2d139.7245!3d35.7835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018930000000001%3A0x0!2z5p2x5Lqs6YO95YyX5Yy65b-X6IyCMi00MS0xMw!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Access;
