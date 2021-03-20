import {useState, useEffect, useRef} from "react";
import useCookie from "../../hooks/useCookie"
import { useHistory } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/fr';
import TextInput from '../tools/TextInput';
import Switcher from '../tools/Switcher';
import { useParams } from "react-router";

const NewArticle =  ({data, ...state}) =>{
    const dataBinding = useRef();
    const { id } = useParams();
    const token = useCookie('access_token_admin')[0];
    dataBinding.current = {state: state, id: id, token: token.value};

    const {article} = data;

    useEffect(() => {
        if(dataBinding.current.id !== undefined){
            dataBinding.current.state.actions.fetchArticleAsAdmin(dataBinding.current.token, dataBinding.current.id);
        }
    }, [dataBinding]);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [location, setLocation] = useState('');
    const [published, setPublished] = useState(false);
    const [hasSubmited, setHasSubmited] = useState(false);
    const [description, setDescription] = useState('');

    if(article !== undefined && title.length === 0 && content.length === 0 && location.length === 0){
        setTitle(article.title);
        setContent(article.content);
        setLocation(article.location);
        setPublished(article.published);
        setDescription(article.description ? article.description : '');
    }

    //error managment
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorLocation, setErrorLocation] = useState(false);

    const history = useHistory();
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
    const handleDescriptionChange = (e, editor) => {
        const data = editor.getData();
        setDescription(data);
    }
    const handleLocationChange = (e) => {
        let locationValue = e.target.value;
        fieldVerify(locationValue, errorLocation, setErrorLocation, "Veuillez renseigner le lieu");
        setLocation(locationValue);
    }
    const handlePublishedChange = () => {
        setPublished(!published);
    }
    const Submit = () => {
        setHasSubmited(true);
        fieldVerify(title, errorTitle, setErrorTitle, "Veuillez donner un titre à votre article", true);
        fieldVerify(location, errorLocation, setErrorLocation, "Veuillez renseigner le lieu", true);
        
        if(title.length === 0 || content.length === 0 || location.length === 0) return;

        if(article === undefined){
            state.actions.addArticle(title, description, content, location, published, token);
        }else{
            state.actions.updateArticle(id, title, description, content, location, published, token);
        }
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
                value={title}
                errorMessage={errorTitle} />

                <div className="form-group">
                    <label className="form-label">Description</label>
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
                        data={description}
                        onReady={ editor => {} }
                        onChange={ ( event, editor ) => handleDescriptionChange(event, editor)}
                        onBlur={ ( event, editor ) => {} }
                        onFocus={ ( event, editor ) => {} }
                    />
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
                        data={content}
                        onReady={ editor => {} }
                        onChange={ ( event, editor ) => handleContentChange(event, editor)}
                        onBlur={ ( event, editor ) => {} }
                        onFocus={ ( event, editor ) => {} }
                    />
                </div>
            
                <TextInput 
                placeholder="ex. Les Gorges du Verdon" 
                label="Localisation"
                param="location"
                handleValue={handleLocationChange}
                value={location}
                errorMessage={errorLocation} />

                <Switcher label="Publier" value={published} handleChange={handlePublishedChange} />

                <button className="btn btn-success" onClick={() => Submit()}>Valider</button>
            </div>
        </div>
    )
}

export default NewArticle;