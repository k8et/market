import React from 'react';
import Paragraph from "../Paragraph";


const Footer = () => {
    return (
        <div>
            <nav className="bg-white flex items-center justify-center h-[80px] border-t-2 p-4 ">
                <Paragraph>@made by me</Paragraph>
            </nav>
        </div>
    );
};

export default Footer;