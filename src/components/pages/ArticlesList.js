import { useEffect, useRef } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import useCookie from '../../hooks/useCookie';
import { useHistory } from "react-router-dom";


const ArticlesList = ({articles}) => {
    const columns = [{
        dataField: 'createdAt',
        text: "Date"
    },
    {
        dataField: 'location',
        text: "Lieu"
    },
    {
        dataField: 'title',
        text: "Titre"
    },
    {
        dataField: 'text',
        text: "Contenu"
    },
    {
        dataField: 'User.username',
        text: "Auteur"
    },
    {
        dataField: 'actions',
        text: "Actions"
    }];

    return (
        <div className="card">
            <h5 className="h5 card-header">Liste des articles</h5>
            <div className="card-body">
                <BootstrapTable 
                hover={true}
                keyField='id' 
                data={ articles } 
                columns={ columns } 
                pagination={paginationFactory()} />
            </div>
        </div>
    )
}

const ArticlesListComponent = ({ data, ...state}) => {
    const history = useHistory();
    const token = useCookie('access_token_admin')[0];
    const dataBinding = useRef();
    dataBinding.current = {state: state, token: token};
    useEffect(() => {
        dataBinding.current.state.actions.fetchArticlesAsAdmin(dataBinding.current.token);
    }, [dataBinding]);
    
    const handleRemove = (articleId) =>{
        let confirm = window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?');
        if(confirm) state.actions.removeArticles(token, articleId);
    }

    const {status, articles} = data

    if(status === 409) history.push('/login');

    if(articles !== undefined){
        articles.map(article =>{
            var date = new Date(article.createdAt);
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var id = article.id
            date = date.toLocaleDateString('fr-FR', options);
            article.createdAt = date;
            article.text = <p dangerouslySetInnerHTML={{__html: article.content.slice(0, 100)}}></p>;
            article.actions = <div>
                    <a role="button" className="btn btn-warning mr-2" href={"/admin/article/" + id}><i className="far fa-edit fa-lg" style={{color:'white'}}></i></a>
                    <button 
                    className="btn btn-danger" 
                    onClick={ () => handleRemove(id) }
                    >
                        <i className="fas fa-trash-alt fa-lg"></i>
                    </button>
                </div>
            return article;
        })
    }
    
    return (
        <>
            { articles &&
                <ArticlesList articles={articles} />
            }
        </>
    )
}

export default ArticlesListComponent;