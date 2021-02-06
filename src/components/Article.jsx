import React, { useEffect } from 'react';

function Article({article}){
    var date = new Date(article.createdAt);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    date = date.toLocaleDateString('fr-FR', options);

    return (
        <article className="post">
            <header>
                <div className="title">
                    <h2><a href="single.html">{article.title}</a></h2>
                    {/* <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p> */}
                </div>
                <div className="meta">
                    <time className="published" dateTime={article.createdAt}>
                        {date}
                    </time>
                    <a href="toto" className="author">
                        <span className="name">
                            {article.User.username}
                        </span>
                        <img src="images/avatar.jpg" alt="" />
                    </a>
                </div>
            </header>
            {/* <a href="single.html" className="image featured"><img src="images/pic03.jpg" alt="" /></a> */}
            <p dangerouslySetInnerHTML={{__html: article.content}}></p>
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
export function ArticleComponent({articles, ...state}){
    useEffect(() => {
        state.actions.fetchArticles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div>
            {articles.map(article => <Article article={article} key={article.id} />)}
        </div>
    )
    
}