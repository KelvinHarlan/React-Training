import './mainfixed.css';
import React from 'react';
import { FaSistrix } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaHome } from "react-icons/fa";










export default (props) =>{
    return (
        <div className="menu-fixed-box">
        <ul>
            <li>
                <a href="#"><FaSistrix/></a>
            </li>
            <li>
                <a href="#"><FaHome/></a>
            </li>
            <li>
                <a href="#"><FaShopify/></a>
            </li>
            <li>
                <a href="#"><FaHeart/></a>
            </li>
            <li>
                <a href="#"><FaHeadset/></a>
            </li>
        </ul>
    </div>
    )
}