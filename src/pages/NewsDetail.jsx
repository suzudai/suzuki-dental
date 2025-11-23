import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { newsData } from '../data/newsData';
import './NewsDetail.css';

const NewsDetail = () => {
    const { id } = useParams();
    const article = newsData.find(item => item.id === id);

    if (!article) {
        return <Navigate to="/news" replace />;
    }

    return (
        <div className="news-detail-page">
            <div className="container">
                <div className="news-detail-header">
                    <time className="news-detail-date">{article.date}</time>
                    <h1 className="news-detail-title">{article.title}</h1>
                </div>
                <div
                    className="news-detail-content"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
                <div className="news-detail-footer">
                    <Link to="/" className="btn-back">ホームへ戻る</Link>
                    <Link to="/news" className="btn-back">一覧へ戻る</Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
