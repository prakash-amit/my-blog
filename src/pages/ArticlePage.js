import React, {useState, useEffect} from 'react';
import ArticlesList from '../components/ArticlesList';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articles.find( article => article.name === name)

    const [articleInfo, setArticleInfo] = useState({upvotes : 0, comments : []});

    useEffect( () => {
        setArticleInfo({upvotes : 3});
    })

    const relatedArticles = articles.filter( article => article.name !== name);
    if( !article ) {
        return (
            <NotFoundPage />
        )
    }
    return (
        <>
        <h1>{article.title}</h1>
        <p>This article has been upvoted {articleInfo.upvotes} times.</p>
        {article.content.map(
            (paragraph,key) => (
                <p key={key}>{paragraph}</p>
            )
        )}
        <h3>Other related articles:</h3>
        <ArticlesList articles = {relatedArticles}/>
        </>
    )
}

export default ArticlePage;