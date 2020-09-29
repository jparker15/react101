import React, {useState} from 'react'
import Button from './Button'
import Input from './Input'

export default function Form(props) {//inputs=Array, title=String, submitFunc= function

    const initialState = props.inputs.reduce((initial,input)=>{
        initial[input.name]= ""
        return initial
    }, {})

    const [formValues, updateValues] = useState(initialState)

    const btnOnClick = () =>{
        props.submitFunc(formValues);
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
                                onChange={(e) =>{

                                    const newVal = e.target.value
                                    const inputName = e.target.name

                                    updateValues({...formValues, [inputName]:newVal});
                                    // console.log(e.target.name,e.target.value);
                                }}
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
