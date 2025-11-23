import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import './ServiceDetail.css';
import { FaHome, FaAmbulance, FaHeart } from 'react-icons/fa';

const HomeVisits = () => {
    return (
        <ServicePageLayout title="訪問診療" subtitle="Home Visits">
            <div className="service-detail-section">
                <h2>通院が困難な方へ</h2>
                <p>
                    お体が不自由で通院が難しい方のために、ご自宅や施設へ歯科医師と歯科衛生士が伺います。
                    持ち運び可能な専用の機材を持参しますので、虫歯治療や入れ歯の調整、口腔ケアなど、
                    院内とほぼ同等の治療を受けていただくことが可能です。
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><FaHome /></div>
                        <div className="feature-title">ご自宅で治療</div>
                        <p>慣れ親しんだ環境で、リラックスして治療を受けていただけます。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaAmbulance /></div>
                        <div className="feature-title">専用機材を持参</div>
                        <p>ポータブルユニットを持参しますので、幅広い治療に対応可能です。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaHeart /></div>
                        <div className="feature-title">口腔ケア</div>
                        <p>誤嚥性肺炎の予防など、お口の健康管理を通じて全身の健康をサポートします。</p>
                    </div>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>訪問診療の流れ</h2>
                <div className="treatment-flow">
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">お申し込み</span>
                            <p>お電話にてお申し込みください。患者様の状態やご希望の日時をお伺いします。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">訪問・検診</span>
                            <p>歯科医師・歯科衛生士がご自宅へ伺い、お口の状態を検診します。治療計画をご説明します。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">治療・ケア</span>
                            <p>患者様の体調に合わせて、無理のない範囲で治療や口腔ケアを行います。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">定期訪問</span>
                            <p>治療終了後も、お口の健康を維持するために定期的な訪問口腔ケアをおすすめしています。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>よくあるご質問</h2>
                <div className="faq-list">
                    <div className="faq-item">
                        <div className="faq-question">費用はどれくらいかかりますか？</div>
                        <div className="faq-answer">
                            基本的には医療保険と介護保険が適用されます。詳しくは訪問時にご説明いたしますが、
                            交通費（出張費）はいただいておりませんのでご安心ください。
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">どんな治療が受けられますか？</div>
                        <div className="faq-answer">
                            虫歯治療、歯周病治療、入れ歯の作製・調整・修理、抜歯、口腔ケアなど、ほとんどの治療が可能です。
                            ※大掛かりな外科処置など、一部対応できない場合もあります。
                        </div>
                    </div>
                </div>
            </div>
        </ServicePageLayout>
    );
};

export default HomeVisits;
