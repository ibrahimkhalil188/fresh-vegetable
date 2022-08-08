import React from 'react';
import banner1 from '../public/Images/banner1.jpg'
import banner2 from '../public/Images/banner2.jpg'
import style from '../styles/Promotion.module.css'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'
const Promotion = () => {
    const { bestProductDiv, quoteBanner, quoteBannerTwo, quoteOne, quoteTwo, button } = style
    return (
        <div className={bestProductDiv}>
            <div className={quoteBanner}>
                <Image src={banner1} alt="" />
                <p></p>
                <div className={quoteOne}>
                    <FaQuoteLeft></FaQuoteLeft><br></br>
                    FRESH FOOD <br></br>EAT FRESH FELL FRESH
                    <button className={button}>BUY NOW</button>
                </div>
            </div>

            <div className={quoteBannerTwo}>
                <Image height="465" src={banner2} alt="" />
                <div className={quoteTwo}>
                    Love your health and love your vegetables.
                    <button className={button}>BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Promotion;