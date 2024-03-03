import React from 'react';

const Button = ({ className, text, black, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex px-5 p-2.5 border-2 border-bCus rounded font-bold items-center justify-center ${black ? 'bg-bCus text-white hover:bg-white hover:text-bCus' : 'bg-white text-bCus hover:bg-bCus hover:text-white'} ${className}`}>
            {text}
        </button>
    );
};

export default Button;
