
import React from 'react'
import '../../assets/login.css'
import { Form, Button } from 'react-bootstrap';
import TextInput from '../tools/TextInput'

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = () => {
        console.log("submit...");
        setEmail("toto");
        console.log(email);
    }
    return(
        <Form id="login-page">
            <TextInput label="Adresse email" placeholder="Saisissez votre email" value={email} />
            <TextInput label="Mot de passe" placeholder="Saisissez votre mot de passe" type="password" />

            <Button variant="primary" type="button" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    )
}



export default Login;