import React from 'react';
import Heading from "./Heading";
import {Link} from "react-router-dom";

const CardData = ({item}) => {
    return (
        <div className="rounded w-[200px]">
            <Link to={`/product/${item.id}`}>
                <img className="w-[200px] rounded" src={item.image} alt={item.title}/>
            </Link>
            <Heading className="text-xl">{item.title}</Heading>
            <Heading className="text-xl">${item.price}</Heading>
        </div>
    );
};

export default CardData;
