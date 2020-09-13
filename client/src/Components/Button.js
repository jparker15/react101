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

const defaultStyle = {}