import React from 'react';
import ServicesComponent from '../components/Services';
import ServicePageLayout from '../components/ServicePageLayout';

const Services = () => {
    return (
        <main className="page-content">
            <div className="page-header">
                <div className="container">
                    <h1>診療案内</h1>
                    <p>Services</p>
                </div>
            </div>
            <div className="container" style={{ marginTop: '60px', marginBottom: '60px' }}>
                <p className="services-intro" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.8' }}>
                    当院では、一般歯科から専門的な治療まで、幅広い診療に対応しております。
                    患者様一人ひとりのお悩みやご希望に合わせた最適な治療プランをご提案いたします。
                </p>
                <ServicesComponent showTitle={false} />
            </div>
        </main>
    );
};

export default Services;
