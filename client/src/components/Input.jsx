// import React from 'react'
import PropTypes from 'prop-types'

export default function Input({ type, placeholder, id, className, name, handleChange, label }) {
    return (
        <div className="form-floating mb-3">
            <input type={type} className={className} id={id} placeholder={placeholder} name={name} onChange={handleChange} />
            <label>{label}</label>
        </div>

    )
}
Input.propTypes = {

    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string
}