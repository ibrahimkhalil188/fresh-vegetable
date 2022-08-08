import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link';
import style from '../styles/Navbar.module.css'
import { BsCartCheck } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
const Navbar = () => {
    const { navbar, logo, menu, menubar, icon, listItem, link, span } = style
    return (
        <div className={navbar}>
            <div className={logo}>
                <h2>FreshFood</h2>
            </div>
            {/* <div>
                <input type='text' className={searchBar} ></input ><span className={search}>Search</span>
            </div> */}
            <div >
                <AiOutlineMenu className={icon} ></AiOutlineMenu>

                <div className={`${menu} ${menubar}`}>
                    <li className={listItem}><Link className={link} href=''>
                        <span className={span} title='Add to cart'>
                            <BsCartCheck></BsCartCheck>
                        </span>
                    </Link></li>
                    <li className={listItem}><Link className={span} href=''>
                        <span className={span} title='Add to cart'>                                  <AiOutlineHeart></AiOutlineHeart>
                        </span>
                    </Link></li>
                    <li className={listItem}><Link href='/'>Home</Link></li>
                    <li className={listItem}><Link href='#product'>Product</Link></li>
                    <li className={listItem}><Link href='#about'>About</Link></li>

                    <li className={listItem}><Link href='login'>Login</Link></li>
                </div>
            </div>
        </div >
    );
};

export default Navbar;