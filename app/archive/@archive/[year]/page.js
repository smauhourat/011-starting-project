import NewsGrid from '@/components/news/news-grid';
import { getNewsForYear } from '@/lib/news';

export default function FilteredNewsPage({ params }) {

    const filteredNews = getNewsForYear(params.year)

    return (
        <div>
            News of year: {params.year}
            <NewsGrid news={filteredNews} />
        </div>
    )
}
