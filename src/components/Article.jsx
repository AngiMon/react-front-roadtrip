//import { statements } from '@babel/template';
import React from 'react';
import {connect, useSelector} from 'react-redux';
import { articlesSelector } from '../store/article/articleSelectors';

function Article({article}){
    return (
        <article className="post">
            <header>
                <div className="title">
                    <h2><a href="single.html">{article.title}</a></h2>
                    <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
                </div>
                <div className="meta">
                    <time className="published" dateTime="2015-10-22">October 22, 2015</time>
                    <a href="/" className="author"><span className="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>
                </div>
            </header>
            <a href="single.html" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
            <p>
                {article.content}    
            </p>
            <footer>
                <ul className="actions">
                    <li><a href="single.html" className="button large">Continue Reading</a></li>
                </ul>
                <ul className="stats">
                    <li><a href="/">General</a></li>
                    <li><a href="/" className="icon solid fa-heart">28</a></li>
                    <li><a href="/" className="icon solid fa-comment">128</a></li>
                </ul>
            </footer>
        </article>
    )
}
export function ArticleComponent(){
    const articles = useSelector(articlesSelector)
    return (
        <div>
            {articles.map(article => <Article article={article} key={article.id} />)}
        </div>
    )
    
}

//'connect' retrieves data from store
//'state' is an object declared in store/index.js
//'article' is ArticleComponent parameter
/**export const ArticleStore = connect(
    (state) => ({
        articles: articleSelector(state)
    }),
    (dispatch) => ({

    })
)(ArticleComponent);*/