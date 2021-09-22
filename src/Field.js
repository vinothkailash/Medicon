import React from 'react'

function Field({ name , type }) {
    return (
        <div classname = "field">
            <div className = "field-name"><strong>{name}</strong></div>
            <input type = {type} className="text-box" />
        </div>
    )
}

export default Field
