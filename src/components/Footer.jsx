import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="container footer-container">
                <div className="footer-info">
                    <h3>鈴木歯科医院</h3>
                    <p>〒115-0042 東京都北区志茂2-3-4</p>
                    <p>TEL: 03-1234-5678</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><Link to="/">ホーム</Link></li>
                        <li><Link to="/about">当院について</Link></li>
                        <li><Link to="/services">診療案内</Link></li>
                        <li><Link to="/staff">スタッフ紹介</Link></li>
                        <li><Link to="/access">アクセス</Link></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                &copy; 2024 Suzuki Dental Clinic. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
