import React from 'react';
import CardWrapper from "../components/CardWrapper";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const Confidentiality = () => {
    return (
        <div className="pt-36 justify-center flex flex-col items-center">
            <div className="w-[66%] flex">
                <div className="flex w-full flex-col">
                    <div>
                        <CardWrapper>
                            <Heading>Privacy Policy</Heading>
                        </CardWrapper>
                    </div>
                    <div>
                        <CardWrapper className="flex !gap-5 flex-col">
                            <div className="flex gap-2.5 items-center mt-5">
                                <Heading className="text-xl">Last Updated:</Heading>
                                <Paragraph>03.03.2024</Paragraph>
                            </div>
                            <p className={"flex flex-col text-[20px] text-g"}>
                                We at "Kumys Store" value your
                                privacy and are committed to ensuring the security of your personal data. This privacy
                                policy explains how we collect, use, disclose, and protect information about you in
                                connection with your visit to our website and use of our services.
                            </p>
                        </CardWrapper>
                    </div>
                    <div>
                        <CardWrapper className="flex !gap-5 flex-col">
                            <div className="flex gap-2.5 items-center mt-5">
                                <Heading className="text-xl">Collection and Use of Information</Heading>
                            </div>
                            <p className={"flex flex-col text-[20px] text-g"}>
                                We at "Kumys Store" value your
                                privacy and are committed to ensuring the security of your personal data. This privacy
                                policy explains how we collect, use, disclose, and protect information about you in
                                connection with your visit to our website and use of our services.
                            </p>
                        </CardWrapper>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center bg-[#f5f7f8] gap-10 rounded p-10">
                    <Heading className="text-[30px]">Protection of Information</Heading>
                    <Paragraph>
                        In a free hour, when our power of choice is untrammelled and when a nothing prevents our being
                        able to do what we like best but in certain circumstances and owing to the claims.
                    </Paragraph>
                    <div>
                        <p className={"flex flex-col text-[20px] text-g"}>
                            We take all necessary measures to protect your personal information from unauthorized
                            access, alteration, disclosure, or destruction. We ensure the security of your data through
                            encryption and other security measures.
                        </p>
                        <p className={"flex flex-col text-[20px] text-g"}>
                            We do not sell, trade, or transfer your personal information to third parties without your
                            consent, except when necessary to fulfill services provided by you, such as payment
                            processing, product delivery, or fulfilling your request.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confidentiality;