import { useEffect, useRef } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import useCookie from '../../hooks/useCookie';
import { useHistory } from "react-router-dom";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import {Link} from "react-router-dom";

const ArticlesList = ({articles}) => {
    const { SearchBar } = Search;
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
        text: "Description"
    },
    {
        dataField: 'User.username',
        text: "Auteur"
    },
    {
        dataField: 'state',
        text: "En ligne"
    },
    {
        dataField: 'actions',
        text: "Actions"
    }];

    return (
        <div className="card">
            <h5 className="h5 card-header">Liste des articles</h5>
            <div className="card-body">
                <ToolkitProvider
                keyField="id"
                data={ articles }
                columns={ columns }
                search={ {
                    placeholder: "Rechercher"
                  } }
                >
                    {
                        props => (
                        <div>
                            <div className="row">
                                <i className="fas fa-search fa-flip-horizontal ml-3 mt-2 mr-1"></i>
                                <SearchBar 
                                placeholder="Rechercher" 
                                { ...props.searchProps } />
                            </div>
                            <BootstrapTable 
                            { ...props.baseProps }
                            hover={true}
                            pagination={paginationFactory()} />
                        </div>
                        )
                    }
                </ToolkitProvider>
                
            </div>
        </div>
    )
}

const ArticlesListComponent = ({ data, ...state}) => {
    const history = useHistory();
    const [cookie] = useCookie("access_token_admin");
    const token = cookie.value;
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

    if(status === 409){
        cookie.remove("access_token_admin")
        history.push('/login');
    }

    if(articles !== undefined){
        articles.map(article =>{
            var date = new Date(article.createdAt);
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var id = article.id
            var description = article.description ? article.description : 'Vide';
            date = date.toLocaleDateString('fr-FR', options);
            article.createdAt = date;
            
            article.text = <p dangerouslySetInnerHTML={{__html: description.slice(0, 150)}}></p>;
            article.state = article.published   ? <i className="fas fa-dot-circle text-success"></i> 
                                                : <i className="fas fa-dot-circle text-danger"></i>
            article.actions = <div>
                    <Link role="button" className="btn btn-warning mr-2" to={"/admin/article/" + id}><i className="far fa-edit fa-lg" style={{color:'white'}}></i></Link>
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