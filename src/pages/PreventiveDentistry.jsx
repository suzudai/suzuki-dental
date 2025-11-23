import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import './ServiceDetail.css';
import { FaShieldAlt, FaBroom, FaCheckCircle } from 'react-icons/fa';

const PreventiveDentistry = () => {
    return (
        <ServicePageLayout title="予防歯科">
            <div className="service-detail-section">
                <h2>「痛くなる前」の受診が大切です</h2>
                <p>
                    これまでの歯科治療は「痛くなったら削る」が一般的でしたが、削った歯は二度と元には戻りません。
                    当院の予防歯科では、虫歯や歯周病にならないための「予防」を重視しています。
                    定期的なメンテナンスを受けることで、お口のトラブルを未然に防ぎ、生涯ご自身の歯で過ごせるようサポートします。
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><FaShieldAlt /></div>
                        <div className="feature-title">早期発見・早期治療</div>
                        <p>定期検診により、小さな変化も見逃さず、早期に対応することで負担の少ない治療が可能です。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaBroom /></div>
                        <div className="feature-title">プロによるケア</div>
                        <p>普段の歯磨きでは落としきれない汚れを、専用の機器を使って徹底的に除去します。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaCheckCircle /></div>
                        <div className="feature-title">全身の健康へ</div>
                        <p>お口の健康は全身の健康と密接に関わっています。予防歯科で健康寿命を延ばしましょう。</p>
                    </div>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>当院の予防メニュー</h2>
                <div className="treatment-flow">
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">定期検診</span>
                            <p>虫歯や歯周病のチェック、入れ歯の不具合などを確認します。3〜6ヶ月に一度の受診をおすすめしています。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">PMTC（専門的機械歯面清掃）</span>
                            <p>歯科衛生士が専用の器具を使って、歯の表面の汚れ（バイオフィルム）や着色をきれいに取り除きます。ツルツルの歯になり、汚れがつきにくくなります。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">フッ素塗布</span>
                            <p>高濃度のフッ素を塗布することで、歯質を強化し、虫歯になりにくい歯を作ります。大人の方にも効果的です。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">ブラッシング指導</span>
                            <p>患者様のお口の状態に合わせた歯ブラシの選び方や、効果的な磨き方をアドバイスします。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>よくあるご質問</h2>
                <div className="faq-list">
                    <div className="faq-item">
                        <div className="faq-question">痛くなくても歯医者に行っていいのですか？</div>
                        <div className="faq-answer">
                            もちろんです！むしろ痛くない時こそ、予防のチャンスです。
                            定期的に通院されている方ほど、将来残る歯の本数が多いというデータもあります。
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">PMTCは痛いですか？</div>
                        <div className="faq-answer">
                            痛みはほとんどありません。むしろ「気持ちいい」「スッキリする」と仰る患者様が多いです。
                            エステ感覚でリラックスして受けていただけます。
                        </div>
                    </div>
                </div>
            </div>
        </ServicePageLayout>
    );
};

export default PreventiveDentistry;
