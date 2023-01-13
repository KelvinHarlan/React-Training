import React from "react";
import '../Maincakes/Maincakes.css'
import { FaBirthdayCake } from "react-icons/fa";


export default (props) =>{
    return (
        <div className="mainItem">
            <ul>
                <li>
                    <a href="#"><FaBirthdayCake className = 'faIcons'/>{props.nome}</a>
                </li>
            </ul>
        </div>
    )
} 