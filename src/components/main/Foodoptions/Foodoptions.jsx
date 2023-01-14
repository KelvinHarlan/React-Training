import '../Foodoptions/foodoptions.css'
import React from 'react'

export default (props) =>{

    let option = props.option;
    let bg = props.bg;
 
    return (
        <div className='card'>
           <a className = {bg} href='#'><h4>{option}</h4></a>
        </div>
    )
}