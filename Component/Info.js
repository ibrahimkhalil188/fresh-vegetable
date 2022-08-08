import React from 'react';
import style from '../styles/Info.module.css'
import { AiOutlineSafety } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { BiSupport } from 'react-icons/bi'
const Info = () => {
    const { infoDiv, infoCard, span } = style
    const info = [
        {
            id: "1",
            icon: <AiOutlineSafety></AiOutlineSafety>,
            name: "100% Safe Quality",
            description: "Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue"
        },
        {
            id: "2",
            icon: <TbTruckDelivery></TbTruckDelivery>,
            name: "Free Home Delivary.",
            description: "Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue"
        },
        {
            id: "3",
            icon: <BiSupport></BiSupport>,
            name: "We Support 24/7",
            description: "Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue"
        },
    ]
    return (
        <div className={infoDiv}>
            {info.map(item =>
                <div className={infoCard} key={item.id}>
                    <span className={span}>{item.icon}</span>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                </div>)}
        </div>
    );
};

export default Info;