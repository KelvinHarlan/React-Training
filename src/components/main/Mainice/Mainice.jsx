import React from "react";
import './mainice.css'
import { FaIceCream } from "react-icons/fa";



export default (props) => {
    return (
        <div className="mainItem">
            <ul>
                <li>
                    <a href="#"><FaIceCream className='faIcons' />{props.nome}</a>
                </li>
            </ul>
        </div>
    )
}