import React from "react";
import '../Mainlunch/Mainlunch.css'
import { FaUtensils } from "react-icons/fa";


export default (props) =>{
    return (
        <div className="mainItem">
            <ul>
                <li>
                    <a href="#"><FaUtensils className = 'faIcons'/>{props.nome}</a>
                </li>
            </ul>
        </div>
    )
} 