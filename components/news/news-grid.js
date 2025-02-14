import NewsItem from './news-item';

export default function NewsGrid({ news }) {
    return (
        <ul className="news-list">
            {news.map((news) => (
                <li key={news.id}>
                    <NewsItem {...news} />
                </li>
            ))}
        </ul>
    );
}