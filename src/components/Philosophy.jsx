import React from 'react';
import { Link } from 'react-router-dom';
import './Philosophy.css';
import directorImage from '../assets/images/director.jpg';

const Philosophy = () => {
    return (
        <section id="philosophy" className="philosophy-section">
            <div className="container">
                <div className="philosophy-content">
                    <div className="philosophy-text fade-in-up">
                        <h2 className="section-title">患者様に寄り添う<br />歯科治療を</h2>
                        <h3 className="philosophy-subtitle">一人ひとりの患者さんに<br />時間をかけてカウンセリング</h3>
                        <p>
                            ここ「北区赤羽」という地域で、小さなお子さんから高齢の患者さんまで幅広くお付き合いできるようなホームドクター的な歯科医院を目指して日々診療に励んでおります。
                        </p>
                        <p>
                            極力痛みのない治療を心掛け、患者さんの主訴やお悩みを十分にお聞きしながら、お口の中だけでなく全身的な状態にも目を向けるよう心がけております。
                        </p>
                        <div className="philosophy-signature">
                            <p>SUZUKI DENTAL CLINIC</p>
                            <p>院長　鈴木英也</p>
                        </div>
                        <Link to="/staff" className="btn-primary">スタッフ紹介</Link>
                    </div>
                    <div className="philosophy-image fade-in-up delay-2">
                        <img src={directorImage} alt="院長 鈴木英也" />
                        <div className="image-decoration"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
