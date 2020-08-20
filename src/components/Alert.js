import React from 'react'

function Alert({Alert, styling}) {
    const {message, color} = Alert
    return (
        <>
        <div className={color} style={styling} >{message}</div>
        </>
    )
}

export default Alert
