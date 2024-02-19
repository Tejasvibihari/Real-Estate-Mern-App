// import React from 'react'
// import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';


export default function Input({ type, placeholder, label, id, name }) {
    return (

        <div className="form-floating mb-3">
            <input type={type} className="form-control" id={id} placeholder={placeholder} name={name} />
            <label>{label}</label>
        </div>
    )
}
Input.propTypes = {
    type: PropTypes.string.isRequired, // Type of input (e.g., text, password)
    placeholder: PropTypes.string.isRequired, // Placeholder text for input
    label: PropTypes.string.isRequired, // Label for input field
    id: PropTypes.string.isRequired, // ID for input field
    name: PropTypes.string.isRequired // Name for input field
};