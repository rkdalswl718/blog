import React from 'react';
import Lupi from '../img/루피.jpg'
import down from '../img/down.svg'
import "./css/header.css"

const Header = () => {
    return (
        <div className='Header_Container'>
            <header className='Header_Header'>
                <h2 className='Header_Title'>Blog</h2>
                <div className="Header_InputBox">
                <input type="text" className='Header_sreach' placeholder='검색하기...'/>
                </div>
                <img src={Lupi} className='Header_Profile' alt=''/>
                <img src={down} className='Header_down' alt="" />
            </header>
        </div>
    );
};

export default Header;