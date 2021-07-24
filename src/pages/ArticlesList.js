import React from 'react';
import articles from './article-content';
import {Link} from 'react-router-dom';
const ArticlesList = () => {
    return (
        <>
        <h1>Articles List</h1>
        {
            articles.map( (article, key) =>
            {
                return (
                    <Link className = "article-list-item" to = {`/article/${article.name}`} key = {key}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0,150)}...</p>
                    </Link>
                )

            }
            )
        }
        </>
    );
}

export default ArticlesList;