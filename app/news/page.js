import NewsGrid from '@/components/news/news-grid';
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <NewsGrid news={DUMMY_NEWS} />
        </>
    )
}
