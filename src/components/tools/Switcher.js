import { Form } from 'react-bootstrap';

const Switcher = ({label, value, handleChange}) => {
    const switcher = value  ? <i onClick={() => handleChange()} className="fas fa-2x fa-toggle-on text-success"></i> 
                            : <i className="fas fa-toggle-on  fa-flip-horizontal text-danger fa-2x" onClick={() => handleChange()}></i>
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            {switcher}
        </Form.Group>
    )
}

export default Switcher;