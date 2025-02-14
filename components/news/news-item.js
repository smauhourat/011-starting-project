import Link from 'next/link';

export default function NewsItem({ id, title, slug, image }) {
    return (
        <div>
            <Link href={`/news/${slug}`}>
                <img src={`/images/news/${image}`} alt={title} />
                <span>{title}</span>
            </Link>
        </div>
    )
}

