import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import './ServiceDetail.css';
import { FaTooth, FaHandHoldingHeart, FaUserMd } from 'react-icons/fa';

const GeneralDentistry = () => {
    return (
        <ServicePageLayout title="一般歯科" subtitle="General Dentistry">
            <div className="service-detail-section">
                <h2>当院の一般歯科について</h2>
                <p>
                    一般歯科では、虫歯や歯周病の治療、入れ歯の作製・調整など、歯科医院で行われる一般的な診療を行います。
                    当院では、単に「悪いところを治す」だけでなく、「なぜそうなったのか」を患者様と一緒に考え、
                    再発を防ぐための根本的な治療を目指しています。
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><FaHandHoldingHeart /></div>
                        <div className="feature-title">痛みの少ない治療</div>
                        <p>表面麻酔や極細の針を使用し、麻酔時の痛みを最小限に抑えます。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaTooth /></div>
                        <div className="feature-title">なるべく削らない</div>
                        <p>ご自身の歯を長く残すため、MI（最小侵襲）治療を心がけています。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaUserMd /></div>
                        <div className="feature-title">丁寧な説明</div>
                        <p>レントゲンや口腔内カメラを使い、視覚的に分かりやすく説明します。</p>
                    </div>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>治療の流れ</h2>
                <div className="treatment-flow">
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">検査・カウンセリング</span>
                            <p>痛みがある場合は応急処置を行い、その後レントゲン撮影や歯周病検査などでお口全体の状態を把握します。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">治療計画の説明</span>
                            <p>検査結果に基づき、現在の状態と必要な治療についてご説明します。患者様のご希望を伺いながら治療方針を決定します。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">治療開始</span>
                            <p>決定した計画に沿って治療を進めます。毎回、その日の治療内容をご説明してから処置を行います。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">メンテナンス</span>
                            <p>治療終了後は、健康な状態を維持するために定期検診をおすすめしています。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>よくあるご質問</h2>
                <div className="faq-list">
                    <div className="faq-item">
                        <div className="faq-question">治療期間はどれくらいかかりますか？</div>
                        <div className="faq-answer">
                            症状や治療内容によって大きく異なります。初診時に治療計画とともに、おおよその期間や回数をお伝えいたします。
                            お急ぎの場合はご相談ください。
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">妊娠中でも治療は受けられますか？</div>
                        <div className="faq-answer">
                            はい、可能です。安定期（5〜7ヶ月）の治療が推奨されますが、痛みがある場合は時期に関わらず応急処置を行います。
                            母子手帳をお持ちになり、受付にお申し出ください。
                        </div>
                    </div>
                </div>
            </div>
        </ServicePageLayout>
    );
};

export default GeneralDentistry;
