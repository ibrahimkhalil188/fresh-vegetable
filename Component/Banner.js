import React from 'react';
import heroImage from '../public/Images/fresh-food.webp'
import style from '../styles/Banner.module.css'
import Image from 'next/image';
import Button from './Button';
const Banner = () => {
    const { hero, heroText, slogan, button, heroImg, } = style
    return (
        <div className={hero}>
            <div className={heroText}>
                <h1 className={slogan}>Fresh Vegetable, Meals and more, online delivery.</h1>
                <div className={button}>
                    <a href='#product'><Button>BUY NOW</Button></a>
                </div>
            </div>
            <div className={heroImg}>
                <Image className={heroImg} src={heroImage} alt="" width="855px" />
            </div>
        </div>
    );
};

export default Banner; 