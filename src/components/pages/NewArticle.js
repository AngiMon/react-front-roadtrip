import {useState} from "react";
import useCookie from "../../hooks/useCookie"
import { useHistory } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/fr';

const NewArticle = ({...state}) =>{
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [location, setLocation] = useState('');
    const token = useCookie('access_token_admin')[0];
    const uploadUrl = process.env.REACT_APP_API_URI + '/ck/uploads'; //TODO put in .env
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleContentChange = (e, editor) => {
        const data = editor.getData();
        console.log(data);
        setContent(data);
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
                <div className="form-group">
                    <label className="form-label">Titre</label>
                    <input 
                    className="form-control" 
                    type="text" 
                    name="title" 
                    placeholder="ex. Voyage au centre de la Terre"
                    onChange={(e) => handleTitleChange(e)} />
                </div>
                <div className="form-group">
                    <label className="form-label">Contenu</label>
                    <CKEditor
                        editor={ ClassicEditor }
                        config={
                            {
                                language:'fr',
                                ckfinder:{
                                    uploadUrl: uploadUrl
                                }
                            } 
                        }
                        data="<p>Hello from CKEditor 5!</p>"
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => handleContentChange(event, editor)}
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Localisation</label>
                    <input 
                    className="form-control" 
                    type="text" 
                    name="location" 
                    placeholder="ex. Les Gorges du Verdon"
                    onChange={(e) => handleLocationChange(e)} />
                </div>
                <button className="btn btn-success" onClick={() => Submit()}>Valider</button>
            </div>
        </div>
    )
}

export default NewArticle;