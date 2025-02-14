import NewsGrid from '@/components/news/news-grid';
import { DUMMY_NEWS } from '@/dummy-news';

function News() {
    const news = [
        {
            id: 1,
            caption: "news number 1",
            slug: "news-n-1"
        },
        {
            id: 2,
            caption: "news number 3",
            slug: "news-n-3"
        },
        {
            id: 3,
            caption: "news number 3",
            slug: "news-n-3"
        },
    ]

    return <NewsGrid news={DUMMY_NEWS} />;
}


export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <News />
        </>
    )
}
