import { useEffect} from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator'

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
        dataField: 'content',
        text: "Contenu"
    },
    {
        dataField: 'User.username',
        text: "Auteur"
    }];

    return (
        <div className="card">
            <h5 className="h5 card-header">Liste des articles</h5>
            <div className="card-body">
                <BootstrapTable keyField='id' data={ articles } columns={ columns } pagination={paginationFactory()} />
            </div>
        </div>
    )
}

const ArticlesListContainer = ({articles, ...state}) => {
    useEffect(() => {
        state.actions.fetchArticles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ArticlesList articles={articles} />
    )
}

export default ArticlesListContainer;