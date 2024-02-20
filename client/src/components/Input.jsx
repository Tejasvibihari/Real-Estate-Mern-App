import PropTypes from 'prop-types';
import { useState } from 'react';


export default function Input({ type, placeholder, label, id, name, value }) {
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }
    console.log(formData);
    return (

        <div className="form-floating mb-3">
            <input type={type} className="form-control" id={id} value={value} placeholder={placeholder} name={name} onChange={handleChange} />
            <label>{label}</label>
        </div>
    )
}
Input.propTypes = {
    type: PropTypes.string.isRequired, // Type of input (e.g., text, password)
    placeholder: PropTypes.string.isRequired, // Placeholder text for input
    label: PropTypes.string.isRequired, // Label for input field
    id: PropTypes.string.isRequired, // ID for input field
    name: PropTypes.string.isRequired, // Name for input field
    value: PropTypes.string
};