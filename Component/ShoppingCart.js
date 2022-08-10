import React from 'react';
import style from '../styles/ShoppingCart.module.css'
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from 'react-icons/ai'
const ShoppingCart = ({ popup, product }) => {
    const products = product || {}
    const data = Object.entries(products)
    console.log(data)
    return (
        <div className={`${style.popup} ${popup ? style.openPopup : ""}`}>
            {
                data.map(p =>
                    <div className={style.item} key={p[0]}>
                        <p>{p[0]}</p>
                        <div className={style.quantity}>
                            <span className={style.icon}><AiOutlinePlus></AiOutlinePlus></span>
                            <p style={{ margin: "0px 10px" }}>{p[1]}</p>
                            <span className={style.icon}><AiOutlineMinus></AiOutlineMinus></span>
                        </div>
                        <span style={{ paddingTop: "20px", fontSize: "28px", color: "red" }} ><AiTwotoneDelete></AiTwotoneDelete></span>
                    </div>
                )
            }
            <button onClick={() => localStorage.setItem("shopping-cart", JSON.stringify({}))} className={style.button}>REMOVE ALL</button>
        </div>
    );
};

export default ShoppingCart;