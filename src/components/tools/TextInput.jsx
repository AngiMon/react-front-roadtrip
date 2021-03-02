import { Form } from 'react-bootstrap';

const TextInput = ({type = "text", placeholder, label, param, handleValue}) => {
    return(
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} onChange={(e) => handleValue(e, param)} placeholder={placeholder} />
        </Form.Group>
    )
}

export default TextInput;