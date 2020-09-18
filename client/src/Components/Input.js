import React from 'react'

export default function Input(props) {

    return (
        <input
            //ph, type, onchange, name, id
            id = {props.id}
            name= {props.name}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            style={{...defaultStyle, ...props.style}}
        
        />
    )
}

const defaultStyle ={
    color: "grey",
    backgroundColor: "lightblue",
    border: "1px solid white",
    padding:  "10px",
    display: "flex"
}
