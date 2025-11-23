import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import './ServiceDetail.css';
import { FaChild, FaSmile, FaShieldAlt } from 'react-icons/fa';

const PediatricDentistry = () => {
    return (
        <ServicePageLayout title="小児歯科" subtitle="Pediatric Dentistry">
            <div className="service-detail-section">
                <h2>お子様の歯を守るために</h2>
                <p>
                    小児歯科では、0歳から12歳くらいまでのお子様を対象に、虫歯の治療や予防処置、歯並びの相談などを行っています。
                    乳歯は永久歯よりも柔らかく、虫歯の進行が早いため、早期発見・早期治療が重要です。
                    また、乳歯の時期からしっかりとお口のケアを行うことで、将来の永久歯の健康にもつながります。
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><FaChild /></div>
                        <div className="feature-title">無理をさせない</div>
                        <p>お子様のペースに合わせて治療を進めます。まずは椅子に座る練習から始めることもあります。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaSmile /></div>
                        <div className="feature-title">楽しい雰囲気</div>
                        <p>「歯医者さんは怖くない」と思ってもらえるよう、スタッフ一同笑顔で接します。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaShieldAlt /></div>
                        <div className="feature-title">予防重視</div>
                        <p>フッ素塗布やシーラントなど、虫歯にならないための予防処置に力を入れています。</p>
                    </div>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>主な予防処置</h2>
                <div className="treatment-flow">
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">フッ素塗布</span>
                            <p>歯の表面に高濃度のフッ素を塗ることで、歯質を強化し、虫歯菌の活動を抑制します。定期的な塗布が効果的です。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">シーラント</span>
                            <p>奥歯の溝は複雑で磨き残しが多いため、あらかじめ樹脂で溝を埋めて虫歯を防ぐ処置です。歯を削る必要はありません。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">ブラッシング指導</span>
                            <p>お子様のお口に合った歯ブラシの選び方や、正しい磨き方を指導します。保護者の方への仕上げ磨きのアドバイスも行います。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>よくあるご質問</h2>
                <div className="faq-list">
                    <div className="faq-item">
                        <div className="faq-question">何歳から通えばいいですか？</div>
                        <div className="faq-answer">
                            歯が生え始めたら（生後6ヶ月頃〜）受診可能です。まずはフッ素塗布や検診だけでもお気軽にお越しください。
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">子供が泣いてしまわないか心配です。</div>
                        <div className="faq-answer">
                            泣いてしまうのは当然のことですので、ご安心ください。当院のスタッフは子供の対応に慣れています。
                            無理に治療を行うことはせず、少しずつ慣れていけるようサポートします。
                        </div>
                    </div>
                </div>
            </div>
        </ServicePageLayout>
    );
};

export default PediatricDentistry;
