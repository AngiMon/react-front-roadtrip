import { useEffect, useRef } from 'react';

function Article({article}){
    var date = new Date(article.createdAt);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    date = date.toLocaleDateString('fr-FR', options);

    return (
        <article className="post">
            <header>
                <div className="title">
                    <h2><a href="/">{article.title}</a></h2>
                    <p>{article.location}</p>
                </div>
                <div className="meta">
                    <time className="published" dateTime={article.createdAt}>
                        {date}
                    </time>
                    <a href="/" className="author">
                        <span className="name">
                            {article.User.username}
                        </span>
                        <img src="images/logo_angi2.JPG" alt="" />
                    </a>
                </div>
            </header>
            {/* <a href="single.html" className="image featured"><img src="images/pic03.jpg" alt="" /></a> */}
            <div className="ck-content" dangerouslySetInnerHTML={{__html: article.content}}></div>
            <footer>
                <ul className="actions">
                    <li><a href="single.html" className="button large">Continue Reading</a></li>
                </ul>
                {/* <ul className="stats">
                    <li><a href="/">General</a></li>
                    <li><a href="/" className="icon solid fa-heart">28</a></li>
                    <li><a href="/" className="icon solid fa-comment">128</a></li>
                </ul> */}
            </footer>
        </article>
    )
}
const ArticleComponent = ({data, ...state}) => {
    const store = useRef();
    store.current = state;

    useEffect(() => {
        store.current.actions.fetchArticles()
    }, [store]);

    const {articles, status} = data;
    
    return (
        <div>
            { status === 200 &&
                articles.map(article => <Article article={article} key={article.id} />) 
            }
        </div>
    )
    
}

export default ArticleComponent;