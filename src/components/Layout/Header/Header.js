import axios from 'axios'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./header.css"

const Header = ({ onClick }) => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState("")

    const getParseItems = (key) => {
        const parsed_value = localStorage.getItem(key);
        if (
            parsed_value !== null &&
            parsed_value !== "" &&
            parsed_value !== undefined
        ) {
            return parsed_value;
        } else {
            return null;
        }
    };

    const Logout = () => {
        localStorage.removeItem('user-token')
        const updatedIsLoggedIn = getParseItems('user-token');
        setIsLoggedIn(updatedIsLoggedIn);
        navigate("/login")
    }
    console.log(isLoggedIn)

    return (
        <div className="header">
        {/* Show navigation links on mobile when isCollapsed is true */}
        <div className='main'>
            <div className="margin: 1.25rem;">
                <h1 className="heading">
                    world
                </h1>
            </div>
            <div className="content">
                <div className="logout">
                    <button className='backgroundColor: #4c3e75;' onClick={Logout}>Logout</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header