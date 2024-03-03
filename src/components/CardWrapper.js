import React from 'react';

const CardWrapper = ({ className, children }) => {
    return (
        <div className={`flex text-bCus flex-wrap gap-6 ${className}`}>
            {children}
        </div>
    );
};

export default CardWrapper;
