import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import './ServiceDetail.css';
import { FaUserMd, FaXRay, FaHospital } from 'react-icons/fa';
import clinicCt from '../assets/images/clinic-ct.jpg';

const OralSurgery = () => {
    return (
        <ServicePageLayout title="口腔外科">
            <div className="service-detail-section">
                <h2>お口周りのトラブルに対応</h2>
                <p>
                    口腔外科では、親知らずの抜歯や顎関節症、口内炎、外傷など、お口の中やその周囲の外科的な処置を行います。
                    「口が開かない」「顎が痛い」「親知らずが腫れた」などのお悩みがあれば、お気軽にご相談ください。
                    難症例の場合は、提携している大学病院等の専門機関へご紹介させていただく場合もございます。
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><FaUserMd /></div>
                        <div className="feature-title">専門的な診断</div>
                        <p>経験豊富な歯科医師が、症状の原因を的確に診断し、最適な治療法をご提案します。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaXRay /></div>
                        <div className="feature-title">精密検査</div>
                        <p>CTなどの検査機器を用いて、神経や血管の位置を正確に把握し、安全な手術を行います。</p>
                        <img src={clinicCt} alt="歯科用CT" className="feature-image" style={{ width: '100%', marginTop: '10px', borderRadius: '10px' }} />
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaHospital /></div>
                        <div className="feature-title">高度医療機関との連携</div>
                        <p>より高度な治療が必要な場合は、速やかに専門機関をご紹介できる体制を整えています。</p>
                    </div>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>主な診療内容</h2>
                <div className="treatment-flow">
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">親知らずの抜歯</span>
                            <p>横向きに生えている、埋まっているなどの難しい親知らずの抜歯も行っています。痛みや腫れに配慮して処置を行います。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">顎関節症</span>
                            <p>「顎が鳴る」「口が開けにくい」などの症状に対し、マウスピース療法や薬物療法、運動療法などを行います。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">口内炎・粘膜疾患</span>
                            <p>なかなか治らない口内炎や、お口の粘膜の異常について診断・治療を行います。必要に応じて組織検査も行います。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">外傷</span>
                            <p>転倒して歯が折れた、唇を切ったなどの緊急時の処置にも対応しています。できるだけ早くご来院ください。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>親知らず抜歯の流れ</h2>
                <div className="treatment-flow">
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">検査・診断</span>
                            <p>レントゲンやCT撮影を行い、親知らずの生え方や神経との位置関係を確認します。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">説明・同意</span>
                            <p>抜歯のリスクや術後の注意点について詳しくご説明し、同意をいただいた上で処置を行います。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">抜歯手術</span>
                            <p>局所麻酔を行い、抜歯します。痛みが苦手な方には、表面麻酔なども併用します。</p>
                        </div>
                    </div>
                    <div className="flow-step">
                        <div className="flow-content">
                            <span className="flow-title">消毒・抜糸</span>
                            <p>翌日に消毒を行い、約1週間後に糸を抜きます。経過を観察し、問題がなければ終了です。</p>
                        </div>
                    </div>
                </div>
            </div>
        </ServicePageLayout>
    );
};

export default OralSurgery;
