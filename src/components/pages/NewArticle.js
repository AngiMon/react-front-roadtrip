import {useState} from "react";
import useCookie from "../../hooks/useCookie"
import { useHistory } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/fr';
import TextInput from '../tools/TextInput'

const NewArticle = ({...state}) =>{
    const history = useHistory();

    const [hasSubmited, setHasSubmited] = useState(false);
    
    const [title, setTitle] = useState(null);
    const [errorTitle, setErrorTitle] = useState(false);

    const [content, setContent] = useState(null);
    
    const [location, setLocation] = useState(null);
    const [errorLocation, setErrorLocation] = useState(false);

    const token = useCookie('access_token_admin')[0];
    const uploadUrl = process.env.REACT_APP_API_URI + '/ck/uploads'; //TODO put in .env
    
    const handleTitleChange = (e) => {
        let titleValue = e.target.value;
        fieldVerify(titleValue, errorTitle, setErrorTitle, "Veuillez donner un titre à votre article");
        setTitle(titleValue);
    }
    const handleContentChange = (e, editor) => {
        const data = editor.getData();
        setContent(data);
    }
    const handleLocationChange = (e) => {
        let locationValue = e.target.value;
        fieldVerify(locationValue, errorLocation, setErrorLocation, "Veuillez renseigner le lieu");
        setLocation(locationValue);
    }
    const Submit = () => {
        setHasSubmited(true);

        fieldVerify(title, errorTitle, setErrorTitle, "Veuillez donner un titre à votre article", true);
        fieldVerify(location, errorLocation, setErrorLocation, "Veuillez renseigner le lieu", true);
        
        if(!title || !content || !location || title.length === 0 || content.length === 0 || location.length === 0) return;

        state.actions.addArticle(title, content, location, token);
        history.push("/admin/article/list");
    }

    const fieldVerify = (fieldValue, errorField, setErrorMessage, textErrorMessage, force=false) => {
        if(hasSubmited || force){
            if(!fieldValue || fieldValue.length === 0 ){
                setErrorMessage(textErrorMessage);
            }else{
                setErrorMessage(false);
            }
        }
    }

    return(
        <div className="card">
            <h5 className="h5 card-header">Nouvel article</h5>
            <div className="card-body">
                <TextInput 
                placeholder="ex. Voyage au centre de la Terre" 
                label="Titre"
                param="title"
                handleValue={handleTitleChange}
                errorMessage={errorTitle} />

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
                        } }
                        onChange={ ( event, editor ) => handleContentChange(event, editor)}
                        onBlur={ ( event, editor ) => {
                        } }
                        onFocus={ ( event, editor ) => {
                        } }
                    />
                </div>
            
                <TextInput 
                placeholder="ex. Les Gorges du Verdon" 
                label="Localisation"
                param="location"
                handleValue={handleLocationChange}
                errorMessage={errorLocation} />

                <button className="btn btn-success" onClick={() => Submit()}>Valider</button>
            </div>
        </div>
    )
}

export default NewArticle;