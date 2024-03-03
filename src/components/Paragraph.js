import React from 'react';

const Paragraph = ({ children, className }) => {
    return (
        <p className={`text-xl text-g ${className}`}>
            {children}
        </p>
    );
};

export default Paragraph;
