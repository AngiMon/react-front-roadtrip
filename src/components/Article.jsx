import { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Article({article, mode=false, children}){
    var date = new Date(article.createdAt);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date = date.toLocaleDateString('fr-FR', options);

    return <article className="post">
                <header>
                    <div className="title">
                        <h2>
                            <Link to={`/article/${article.id}`}>
                                {article.title}
                            </Link>
                        </h2>
                        <p>{article.location}</p>
                    </div>
                    <div className="meta">
                        <time className="published" dateTime={article.createdAt}>
                            {date}
                        </time>
                        <Link to="/" className="author">
                            <span className="name">
                                {article.User.username}
                            </span>
                            <img src="images/logo_angi2.JPG" alt="" />
                        </Link>
                    </div>
                </header>
                {article.description &&
                    <div className="ck-content article_description" dangerouslySetInnerHTML={{__html: article.description}}></div>
                }
                {/* <a href="single.html" className="image featured"><img src="images/pic03.jpg" alt="" /></a> */}
                { (!article.description || mode === 'see') &&
                    <div className="ck-content" dangerouslySetInnerHTML={{__html: article.content}}></div>
                }
                <footer>
                    {!mode &&
                        <ul className="actions">
                            <li>
                                <Link to={`/article/${article.id}`} className="button large">
                                    Lire cet article
                                </Link>
                            </li>
                        </ul>
                    }
                    {children}
                    {/* <ul className="stats">
                        <li><a href="/">General</a></li>
                        <li><a href="/" className="icon solid fa-heart">28</a></li>
                        <li><a href="/" className="icon solid fa-comment">128</a></li>
                    </ul> */}
                </footer>
            </article>
}

export const ArticleComponent = ({data, ...state}) => {
    const { t } = useTranslation();
    const [count, setCount] = useState(1);
    const store = useRef();
    const container = useRef(null);
    
    store.current = state;

    useEffect(() => {
        store.current.actions.fetchArticles()
    }, [store]);

    const {articles, status} = data;

    return <div ref={container}>
        { 
            status === 200 && <>
                {articles.map((article, index) => index === count || index === count - 1 ? <Article article={article} key={article.id} /> : null)}
                <ul className="actions pagination">
                    <li>
                        <button 
                        className={`${count <= 2 ? "disabled" : ""} button large previous`}
                        onClick={() => {
                            setCount(count - 2); 
                            container.current.scrollIntoView()
                        }}>
                            {t("main").page.previous}
                        </button>
                    </li>
                    <li>
                        <button
                        className={`${count >= articles.length ? "disabled" : ""} button large next`}
                        onClick={() => {
                                setCount(count + 2); 
                                container.current.scrollIntoView()
                            }}>
                            {t("main").page.next}
                        </button>
                    </li>
                </ul>
            </>
        }
    </div>
}

export const OneArticleComponent = ({data, ...state}) => {
    const dataBinding = useRef();
    const { id } = useParams();
    dataBinding.current = {state: state, id: id};

    const {article} = data;

    useEffect(() => {
        dataBinding.current.state.actions.fetchArticle(dataBinding.current.id)
    }, [dataBinding]);

    return (
        <div>
            { article !== undefined &&
                <Article article={article} mode="see">
                    <Link className="button large" to="/" >Retour</Link>
                </Article>
            }
        </div>
    )
}
