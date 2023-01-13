import React from "react";
import '../Mainfood/Mainfood.css'
import { FaHamburger } from "react-icons/fa";


export default (props) =>{
    return (
        <div className="mainItem">
            <ul>
                <li>
                    <a href="#"><FaHamburger className = 'faIcons'/>{props.nome}</a>
                </li>
            </ul>
        </div>
    )
} 