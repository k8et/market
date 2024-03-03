import React from 'react';

const Card = ({img, title, text}) => {
    return (
        <div
            className="flex flex-col items-center justify-center text-center border w-[235px] border-gray-200 rounded-lg p-4">
            <img src={img} alt={title} className="w-[100px] h-[100px] object-cover mb-4 rounded-lg"/>
            <div>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600">{text}</p>
            </div>
        </div>
    );
};

export default Card;