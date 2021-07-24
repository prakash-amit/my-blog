import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articles from './article-content';

const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articles.find( article => article.name === name)
    const relatedArticles = articles.filter( article => article.name !== name);
    if( !article ) {
        return (
            <h1>No article found</h1>
        )
    }
    return (
        <>
        <h1>{article.title}</h1>
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