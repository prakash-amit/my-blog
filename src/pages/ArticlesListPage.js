import React from 'react';
import articles from './article-content';
import ArticlesList from '../components/ArticlesList';


const ArticlesListPage = () => {
    return (
        <>
        <h1>Articles List</h1>
        <ArticlesList articles ={articles}/>
        </>
    );
}

export default ArticlesListPage;