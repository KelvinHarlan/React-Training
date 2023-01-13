import React from "react";
import './search.css'
import { FaSistrix } from "react-icons/fa";


export default () => {
    return (
       <div>
        <nav className="search-container">
        <FaSistrix className="searchIcon"/><input type="search" />    
        </nav>
       </div>
    )
}