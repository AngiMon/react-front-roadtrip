import { Form } from 'react-bootstrap';

const TextInput = ({type = "text", placeholder, label, param, handleValue, errorMessage=false}) => {
    return(
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            { errorMessage && <p className="alert-danger pl-3"> {errorMessage} </p>}
            <Form.Control type={type} onChange={(e) => handleValue(e, param)} placeholder={placeholder} />
        </Form.Group>
    )
}

export default TextInput;