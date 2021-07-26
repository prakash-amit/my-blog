import React, {useState, useEffect} from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection'
import AddComponentForm from '../components/AddCommentForm';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articles.find( article => article.name === name)

    const [articleInfo, setArticleInfo] = useState({upvotes : 0, comments : []});

    useEffect( () => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    },[name]);

    const relatedArticles = articles.filter( article => article.name !== name);
    if( !article ) {
        return (
            <NotFoundPage />
        )
    }
    return (
        <>
        <h1>{article.title}</h1>
        <UpvotesSection articleName = {name} upvotes = {articleInfo.upvotes} setArticleInfo = {setArticleInfo}/>
        {article.content.map(
            (paragraph,key) => (
                <p key={key}>{paragraph}</p>
            )
        )}
        <CommentsList comments = {articleInfo.comments} />
        <AddComponentForm articleName = {name} setArticleInfo = {setArticleInfo} />
        <h3>Other related articles:</h3>
        <ArticlesList articles = {relatedArticles}/>
        </>
    )
}

export default ArticlePage;