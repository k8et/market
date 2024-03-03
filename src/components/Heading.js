import React from 'react';

const Heading = ({ children, className }) => {
    return (
        <h1 className={`text-5xl text-bCus font-bold ${className}`}>
            {children}
        </h1>
    );
};

export default Heading;
