import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import '../components/News.css'; // Reuse existing styles

const News = () => {
    return (
        <main className="page-content">
            <div className="page-header">
                <div className="container">
                    <h1>お知らせ一覧</h1>
                    <p>News Archive</p>
                </div>
            </div>

            <section className="news-section">
                <div className="container">
                    <div className="news-list">
                        {newsData.map((item, index) => (
                            <article key={item.id} className="news-item fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                                <Link to={`/news/${item.id}`} className="news-link">
                                    <time className="news-date">{item.date}</time>
                                    <h3 className="news-title">{item.title}</h3>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default News;
