import React from 'react';
import style from '../styles/Button.module.css'
const Button = ({ children }) => {
    const { buttonLarge } = style
    return (
        <div>
            <button className={buttonLarge}>{children}</button>
        </div>
    );
};

export default Button;