import React from 'react';
import { Link } from 'react-router-dom';
import { FaTooth, FaChild, FaUserMd, FaShieldAlt, FaHome, FaSmile } from 'react-icons/fa';

import './Services.css';



const servicesData = [
    {
        id: 'general',
        icon: <FaTooth />,
        title: '一般歯科',
        subtitle: 'General Dentistry',
        description: '虫歯治療から歯周病治療、入れ歯の調整まで、一般的な歯科診療を行います。当院では「痛みの少ない治療」を心がけ、患者様の負担を軽減するよう努めています。治療前には丁寧なカウンセリングを行い、現状と治療方針を分かりやすくご説明いたします。',
        features: ['痛みの少ない治療', '丁寧な説明', '歯周病ケア'],
        link: '/services/general'
    },
    {
        id: 'pediatric',
        icon: <FaChild />,
        title: '小児歯科',
        subtitle: 'Pediatric Dentistry',
        description: 'お子様の歯は大人よりもデリケートです。当院では、お子様が歯医者さんを嫌いにならないよう、まずは「慣れる」ことから始めます。フッ素塗布やシーラントなどの予防処置を中心に、お子様の健やかなお口の成長をサポートします。',
        features: ['トレーニングから開始', 'フッ素塗布', 'シーラント'],
        link: '/services/pediatric'
    },
    {
        id: 'oral-surgery',
        icon: <FaUserMd />,
        title: '口腔外科',
        subtitle: 'Oral Surgery',
        description: '親知らずの抜歯や、顎関節症、口内炎、外傷などの診断・治療を行います。難しい症例の場合は、大学病院等の専門機関と連携し、最適な治療を受けていただけるよう手配いたします。お口周りのトラブルはお気軽にご相談ください。',
        features: ['親知らず抜歯', '顎関節症治療', '専門機関との連携'],
        link: '/services/oral-surgery'
    },
    {
        id: 'preventive',
        icon: <FaShieldAlt />,
        title: '予防歯科',
        subtitle: 'Preventive Dentistry',
        description: '「痛くなってから行く」のではなく「痛くならないために行く」歯科医院を目指しています。定期検診やPMTC（プロによるクリーニング）を通じて、虫歯や歯周病を未然に防ぎ、生涯ご自身の歯で美味しく食事ができるようサポートします。',
        features: ['定期検診', 'PMTC', 'ブラッシング指導'],
        link: '/services/preventive'
    },
    {
        id: 'home-visits',
        icon: <FaHome />,
        title: '訪問診療',
        subtitle: 'Home Visits',
        description: 'お体が不自由で通院が困難な方のために、ご自宅や施設へ歯科医師と歯科衛生士が伺います。入れ歯の作製・調整、虫歯治療、口腔ケアなど、院内とほぼ同等の治療が可能です。お口の健康維持は、全身の健康にも繋がります。',
        features: ['ご自宅で治療', '口腔ケア', '誤嚥性肺炎予防'],
        link: '/services/home-visits'
    },
    {
        id: 'dentures',
        icon: <FaSmile />,
        title: '入れ歯・義歯',
        subtitle: 'Dentures',
        description: '「痛い」「噛めない」「外れやすい」など、入れ歯のお悩みはありませんか？当院では、保険診療の入れ歯から、見た目や装着感に優れた自費診療の入れ歯まで、患者様のご希望に合わせた最適な入れ歯をご提案いたします。',
        features: ['精密な型取り', '調整・修理', 'ノンクラスプデンチャー'],
        link: '/services/dentures'
    }
];

const Services = ({ showTitle = true }) => {
    return (
        <div id="services" className="services-page">
            <section className="services-intro-section">
                <div className="bubble-container" style={{ opacity: 0.3 }}>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
                <div className="container">
                    <div className="services-intro fade-in-up">
                        {showTitle && <h2 className="section-title">診療案内</h2>}

                        <p className="intro-text">
                            地域の皆様のお口の健康を守るため、<br className="mobile-br" />幅広い診療科目に対応しています。<br />
                            小さなお子様からご高齢の方まで、<br className="mobile-br" />安心して通える歯科医院です。
                        </p>
                    </div>

                    <div className="services-grid">
                        {servicesData.map((service, index) => (
                            <Link to={service.link} key={service.id} className="service-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="service-card-icon">
                                    {service.icon}
                                </div>
                                <div className="service-card-content">
                                    <span className="service-subtitle">{service.subtitle}</span>
                                    <h3 className="service-name">{service.title}</h3>
                                    <p className="service-desc">{service.description}</p>
                                    <div className="service-card-footer">
                                        <span className="service-link-text">詳しく見る <span className="arrow">→</span></span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
