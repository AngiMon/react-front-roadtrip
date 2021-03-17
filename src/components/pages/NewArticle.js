import {useState} from "react";
import useCookie from "../../hooks/useCookie"
import { useHistory } from "react-router-dom";

const NewArticle = ({...state}) =>{
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [location, setLocation] = useState('');
    const token = useCookie('access_token_admin')[0];
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleContentChange = (e) => {
        setContent(e.target.value);
    }
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }
    const Submit = () => {
        state.actions.addArticle(title, content, location, token);
        history.push("/admin/article/list");
    }

    return(
        <div className="card">
            <h5 className="h5 card-header">Nouvel article</h5>
            <div className="card-body">
                <input type="text" name="title" onChange={(e) => handleTitleChange(e)} />
                <input type="text" name="content" onChange={(e) => handleContentChange(e)} />
                <input type="text" name="location" onChange={(e) => handleLocationChange(e)} />
                <button onClick={() => Submit()}>Valider</button>
            </div>
        </div>
    )
}

export default NewArticle;