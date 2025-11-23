import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import './News.css';

const News = () => {
    // Show only the latest 3 items on the homepage
    const latestNews = newsData.slice(0, 3);

    return (
        <section id="news" className="news-section">
            <div className="container">
                <h2 className="section-title fade-in-up">お知らせ</h2>
                <div className="news-list">
                    {latestNews.map((item, index) => (
                        <article key={item.id} className="news-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <Link to={`/news/${item.id}`} className="news-link">
                                <time className="news-date">{item.date}</time>
                                <h3 className="news-title">{item.title}</h3>
                            </Link>
                        </article>
                    ))}
                </div>
                <div className="news-more">
                    <Link to="/news" className="btn-outline">お知らせ一覧</Link>
                </div>
            </div>
        </section>
    );
};

export default News;
