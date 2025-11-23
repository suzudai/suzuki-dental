import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import './ServiceDetail.css';
import { FaSmile, FaTools, FaHandshake } from 'react-icons/fa';

const Dentures = () => {
    return (
        <ServicePageLayout title="入れ歯・義歯">
            <div className="service-detail-section">
                <h2>あなたにぴったりの入れ歯を</h2>
                <p>
                    「痛い」「噛めない」「外れやすい」など、入れ歯のお悩みはありませんか？
                    合わない入れ歯を使い続けることは、食事の楽しみを奪うだけでなく、お口の中や顎にも悪影響を及ぼします。
                    当院では、保険診療・自費診療を問わず、患者様のお口にぴったり合い、快適に噛める入れ歯の作製を目指しています。
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><FaTools /></div>
                        <div className="feature-title">精密な型取り</div>
                        <p>お口の形は人それぞれです。筋肉の動きまで考慮した精密な型取りを行い、フィット感を高めます。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaSmile /></div>
                        <div className="feature-title">見た目も自然に</div>
                        <p>機能性はもちろん、見た目の美しさにもこだわった入れ歯をご提案します。</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaHandshake /></div>
                        <div className="feature-title">丁寧な調整</div>
                        <p>作製後も、違和感がなくなるまで何度でも丁寧に調整を行います。</p>
                    </div>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>取り扱い入れ歯の種類</h2>
                <div className="comparison-table-wrapper">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>種類</th>
                                <th>特徴</th>
                                <th>メリット</th>
                                <th>デメリット</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>レジン床義歯</strong><br />(保険診療)</td>
                                <td>プラスチック製の一般的な入れ歯です。</td>
                                <td>
                                    ・費用が安い<br />
                                    ・修理がしやすい
                                </td>
                                <td>
                                    ・厚みがあり違和感が出やすい<br />
                                    ・熱が伝わりにくい<br />
                                    ・耐久性がやや劣る
                                </td>
                            </tr>
                            <tr>
                                <td><strong>金属床義歯</strong><br />(自費診療)</td>
                                <td>土台部分に金属を使用した入れ歯です。</td>
                                <td>
                                    ・薄くて丈夫<br />
                                    ・熱が伝わり美味しく食事ができる<br />
                                    ・違和感が少ない
                                </td>
                                <td>
                                    ・費用がかかる<br />
                                    ・修理が難しい場合がある
                                </td>
                            </tr>
                            <tr>
                                <td><strong>ノンクラスプデンチャー</strong><br />(自費診療)</td>
                                <td>金属のバネを使わない入れ歯です。</td>
                                <td>
                                    ・見た目が自然で気づかれにくい<br />
                                    ・金属アレルギーの心配がない<br />
                                    ・フィット感が良い
                                </td>
                                <td>
                                    ・費用がかかる<br />
                                    ・適応できない症例がある
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="service-detail-section">
                <h2>よくあるご質問</h2>
                <div className="faq-list">
                    <div className="faq-item">
                        <div className="faq-question">入れ歯を作るとどれくらいの期間がかかりますか？</div>
                        <div className="faq-answer">
                            通常、型取りから完成まで1ヶ月〜1ヶ月半程度かかります。
                            工程ごとに精密な作業を行うため、週に1回程度の通院をお願いしています。
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">今使っている入れ歯の調整はできますか？</div>
                        <div className="faq-answer">
                            はい、可能です。他院で作製された入れ歯でも、調整や修理を承っております。
                            「痛い」「合わない」などのお悩みがあれば、入れ歯をご持参の上、お気軽にご相談ください。
                        </div>
                    </div>
                </div>
            </div>
        </ServicePageLayout>
    );
};

export default Dentures;
