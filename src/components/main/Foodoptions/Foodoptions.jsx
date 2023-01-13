import '../Foodoptions/foodoptions.css'
import React from 'react'

export default (props) =>{
    return (
        <div className='card'>
           <a href='#'><h4>{props.option}</h4></a>
        </div>
    )
}