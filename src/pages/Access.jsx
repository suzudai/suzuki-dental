import React from 'react';
import AccessComponent from '../components/Access';

const Access = () => {
    return (
        <main className="page-content">
            <div className="page-header">
                <div className="container">
                    <h1>アクセス</h1>
                    <p>Access</p>
                </div>
            </div>
            <AccessComponent showTitle={false} />
        </main>
    );
};

export default Access;
