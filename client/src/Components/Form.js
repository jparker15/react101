import React from 'react'
import Button from './Button'
import Input from './Input'

export default function Form(props) {//inputs=Array, title=String, submitFunc= function

    const btnOnClick = () =>{
        props.submitFunc(document.getElementById(props.id));
    }

    return (
        <div>
            <h2>
                {props.title}
            </h2>
            <form id= {props.id}>
                {
                    Array.isArray(props.inputs)
                    ?
                    props.inputs.map( inProps =>{
                        return(
                            <Input
                                name={inProps.name}
                                placeholder={inProps.placeholder}
                                type={inProps.type}
                                style={inProps.style}
                                id={inProps.id}
                                onChange={inProps.onChange}
                            />
                        )
                    }) : "Dev Warning: No Inputs: Check Form Code"
                }
            </form>
            <Button
                text="submit"
                onClick={btnOnClick}
                
            />
        </div>    
    )
}
