import NewsGrid from '@/components/news/news-grid';
import Link from 'next/link';
import { getNewsForYear, getAvailableNewsYears } from '@/lib/news';

export default function FilteredNewsPage({ params }) {

    // const filteredNews = getNewsForYear(params.year)

    // return (
    //     <div>
    //         News of year: {params.year}
    //         <NewsGrid news={filteredNews} />
    //     </div>
    // )
    const filter = params.filter
    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]

    let news
    const links = getAvailableNewsYears()

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear)
    }

    let newsContent = <p>No news found for the selected period.</p>

    if (news && news.length > 0) {
        newsContent = <NewsGrid news={news} />
    }

    return (<>
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => <li key={{ link }}>
                        <Link href={`/archive/${link}`}>{link}</Link>
                    </li>)}
                </ul>
            </nav>
        </header>
        {newsContent}
    </>
    )
}
