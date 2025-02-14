import NewsGrid from "@/components/news/news-grid"
import { getLatestNews } from "@/lib/news"

export default function LatestNewsPage() {
    const latestNews = getLatestNews()

    return (
        <>
            <h1>
                Latest News
            </h1>
            <NewsGrid news={latestNews} />
        </>
    )
}
