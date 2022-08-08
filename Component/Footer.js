import React from 'react';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { FaInternetExplorer } from 'react-icons/fa'
import style from '../styles/Footer.module.css'
const Footer = () => {
    const { footer, copyright, social } = style
    return (
        <div className={footer}>
            <div className={copyright}>
                <p>Copyright © 2022 all rights reserved</p>
            </div>
            <div className={social}>
                <li className={social}><a href="www.facebook.com"><AiFillFacebook></AiFillFacebook></a></li>
                <li className={social}><a href="www.facebook.com"><AiFillYoutube></AiFillYoutube></a></li>
                <li className={social}><a href="www.facebook.com"><FaInternetExplorer></FaInternetExplorer></a></li>
            </div>
        </div>
    );
};

export default Footer;