import { useEffect } from "react"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
    useEffect(function () {
        document.title = 'Blog'
    }, [])
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        async function getArticles() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const response = await request.json();

            setArticles(response);
            setLoading(false)
        }
        getArticles();
    }, [])

    return (
        <section className="section">
            <h1 className="section-title">Blog</h1>
            <p className="section-desc">Berikut ini adalah tulisan siapa</p>

            {loading && (<i>Loading articles ...</i>)}
            {!loading && (
                <div className="articles">
                    {articles.map(function (article) {
                        return (
                            <article className="article" key={article.id}>
                                <h2 className="article-title"
                                ><Link to={`/blog/${article.id}`}>{article.title}</Link>
                                </h2>
                                <time className="article-time">
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </time>
                            </article>
                         )
                    })};
                </div>
            )}
        </section>
    )
}