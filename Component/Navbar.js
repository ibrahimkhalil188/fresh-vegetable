import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import style from '../styles/Navbar.module.css'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const { navbar, logo, search, searchBar, menu, menubar, icon, anchor, listItem } = style
    return (
        <div className={navbar}>
            <div className={logo}>
                <h2>FreshFood</h2>
            </div>
            <div>
                <input type='text' className={searchBar} ></input ><span className={search}>Search</span>
            </div>
            <div >
                <AiOutlineMenu className={icon} ></AiOutlineMenu>

                <div className={`${menu} ${menubar}`}>
                    <li className={listItem}><a className={anchor} href='#home'>Home</a></li>
                    <li className={listItem}><a className={anchor} href='#product'>Product</a></li>
                    <li className={listItem}><a className={anchor} href='#about'>About</a></li></div>

            </div>
        </div >
    );
};

export default Navbar;