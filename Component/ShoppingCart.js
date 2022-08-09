import React from 'react';
import style from '../styles/ShoppingCart.module.css'
const ShoppingCart = ({ popup }) => {

    return (
        <div className={`${style.popup} ${popup ? style.openPopup : ""}`}>
            {

            }
        </div>
    );
};

export default ShoppingCart;