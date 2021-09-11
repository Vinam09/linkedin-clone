import React from 'react'
import './InputBtn.css'

function InputBtn({Icon,title, color}) {
    return (
        <div className="input-btn">
            <Icon style={{color:color}} />
            <h4>{title}</h4>
        </div>
    )
}

export default InputBtn
