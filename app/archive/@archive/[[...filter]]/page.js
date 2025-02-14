import NewsGrid from '@/components/news/news-grid';
import Link from 'next/link';
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from '@/lib/news';

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
    let links = getAvailableNewsYears()

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear)
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth)
        links = []
    }

    let newsContent = <p>No news found for the selected period.</p>

    if (news && news.length > 0) {
        newsContent = <NewsGrid news={news} />
    }

    return (<>
        <header id="archive-header">
            <nav>
                <ul>
                    {
                        links.map((link) => {
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
                            return (
                                <li key={{ link }}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </nav>
        </header >
        {newsContent}
    </>
    )
}
