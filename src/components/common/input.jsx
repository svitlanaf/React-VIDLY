import React from 'react';

const Input = ({ name, label, value, error, onChange }) => {
    return(
        <div className="form-group">
            <label htmlFor="name">{label}</label>
            <input 
                value={value} 
                name={name} 
                onChange={onChange} 
                id={name} 
                type="text" 
                className="form-control" 
                // placeholder="Email" 
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;