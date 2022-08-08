import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from '../styles/Products.module.css'
import { BsCartCheck } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'

const Products = () => {
    const { main, productsDiv, card, cardFooter, productDetails, span, button } = style
    const [products, setProducts] = useState()
    const url = 'fakedata.json'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div className={main} id='product'>
            <h2>Our products</h2>
            <div className={productsDiv}>
                {
                    products?.map(product =>
                        <div className={card} key={product.id}>
                            <Image src={product.image} alt="" width="250" height="125" />
                            <div className={cardFooter}>
                                <span className={span} title='Show Details'>
                                    <AiOutlineEye></AiOutlineEye>
                                </span>
                                <span className={span} title='Add to whitelist'>
                                    <AiOutlineHeart></AiOutlineHeart>
                                </span>
                                <span className={span} title='Add to cart'>
                                    <BsCartCheck></BsCartCheck>
                                </span>
                            </div>
                            <div className={productDetails}>
                                <p>Name: {product.name}</p>
                                <p>Price: ${product.price}</p>
                            </div>
                            <button className={button}>BUY NOW</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Products;