import React from 'react'
import '../../assets/login.css'
import { Form, Button } from 'react-bootstrap';
import TextInput from '../tools/TextInput';
import {requestAccountHeader} from '../../Redux/actions/requestHeader'
import useCookie from '../../hooks/useCookie'
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    // eslint-disable-next-line
    const [cookie, updateCookie] = useCookie("access_token_admin");
    const history = useHistory();

    const Submit = async() => {
        const response = await requestAccountHeader(email, password);
        const payload = await response.json();
        const {token} = payload;
        updateCookie(token);
        console.log(token);
        history.push('/admin/dashboard')
    }

    const handleValue = (e, param) => {
        let value = e.target.value;
        switch(param){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }
    return(
        <div id="login-page">
            <h1 className="text-center h1">Connexion</h1>
            <Form onKeyPress={(event) => event.key === 'Enter' ? Submit() : false }>
                <TextInput label="Adresse email" handleValue={handleValue} param="email" placeholder="Saisissez votre email" />
                <TextInput label="Mot de passe"  handleValue={handleValue} param="password" placeholder="Saisissez votre mot de passe" type="password" />

                <Button variant="primary" type="button" onClick={Submit}>
                    Valider
                </Button>
            </Form>
        </div>
        
    )
}



export default Login;