import React from 'react';
import { FaUserMd } from 'react-icons/fa';
import './Staff.css';
import directorImage from '../assets/images/director.jpg'; // Assuming this exists or will fallback

const Staff = () => {
    return (
        <div className="staff-page">
            <div className="page-header">
                <div className="container">
                    <h1>スタッフ紹介</h1>
                    <p>STAFF</p>
                </div>
            </div>

            <div className="container">
                <div className="staff-intro fade-in-up">
                    <p>
                        当院のスタッフは、患者様一人ひとりに寄り添い、<br />
                        安心して治療を受けていただけるよう心がけています。<br />
                        お口のお悩みや不安なことがあれば、お気軽にご相談ください。
                    </p>
                </div>

                <section className="director-section fade-in-up">
                    <h2 className="section-title">院長紹介</h2>
                    <div className="director-card">
                        <div className="director-image-container">
                            {/* Use a placeholder if image fails or doesn't exist yet */}
                            <img src={directorImage} alt="院長 鈴木" className="director-image" onError={(e) => { e.target.src = 'https://placehold.co/400x500?text=Director'; }} />
                        </div>
                        <div className="director-content">
                            <div className="director-title">院長</div>
                            <h3 className="director-name">鈴木 英也<span>SUZUKI HIDEYA</span></h3>

                            <div className="director-message">
                                <p>
                                    ここ「北区赤羽」という地域で、小さなお子さんから高齢の患者さんまで幅広くお付き合いできるようなホームドクター的な歯科医院を目指して日々診療に励んでおります。
                                </p>
                                <p>
                                    極力痛みのない治療を心掛け、患者さんの主訴やお悩みを十分にお聞きしながら、お口の中だけでなく全身的な状態にも目を向けるよう心がけております。
                                </p>
                                <p>
                                    特に北区は65歳以上の比率が23区で最も高く、全身疾患により通院できなくなる患者さんもおります。そのような患者さんのために訪問診療を実施しておりますのでお気軽にご相談ください。
                                </p>
                            </div>

                            <div className="director-bio">
                                <h4>略歴</h4>
                                <ul className="bio-list">
                                    <li>昭和61年3月　日本大学松戸歯学部卒業</li>
                                    <li>昭和61年4月　日本大学歯学部付属病院　口腔外科学講座在籍</li>
                                    <li>昭和63年4月～平成4年2月　台東区上野 佐藤歯科医院勤務</li>
                                    <li>平成4年4月　東京都北区志茂　にて開業・現在に至る</li>
                                </ul>
                                <h4 style={{ marginTop: '20px' }}>所属</h4>
                                <ul className="bio-list">
                                    <li>日本歯科医師会会員</li>
                                    <li>東京都歯科医師会会員</li>
                                    <li>北歯科医師会会員・理事</li>
                                    <li>北区立赤羽岩淵中学校校医</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Staff list removed as per request */}
            </div>
        </div>
    );
};

export default Staff;
