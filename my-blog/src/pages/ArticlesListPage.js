import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles={articleContent}/>
        {/* {articleContent.map((article, key) => (
            <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
               <h3>{article.title}</h3>
               <p>{article.content[0].substring(0,150)}</p>
            </Link>            
        ))} */}
    </>
)

export default ArticlesListPage;