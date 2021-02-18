import { Form } from 'react-bootstrap';

const TextInput = ({type = "text", placeholder, label, value}) => {
    return(
        <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} placeholder={placeholder} defaultValue={value} />
        </Form.Group>
    )
}

export default TextInput;