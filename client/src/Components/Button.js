import React from 'react'

export default function Button(props) {
    // console.log(props);
    return (
    <button
        style={{...defaultStyle, ...props.style}}
        onClick={props.onClick}
    
    >{props.text}</button>

    )
}

const defaultStyle = {
    backgroundColor: "pink",
    border: "2px lightgrey solid",
    color: "white",
    padding: "15px 32px",
    "text-align": "center",
    "text-decoration": "none",
    display: "inline-block",
    "font-size": "16px"
}