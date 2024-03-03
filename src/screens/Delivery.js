import React from 'react';
import Heading from "../components/Heading";
import CardWrapper from "../components/CardWrapper";
import Paragraph from "../components/Paragraph";

const Delivery = () => {
    return (
        <div className="pt-36 justify-center flex flex-col items-center">
            <div className="w-[66%] flex">
                <div className="flex w-full flex-col">
                    <div>
                        <CardWrapper>
                            <Heading>Delivery Method</Heading>
                        </CardWrapper>
                    </div>
                    <div>
                        <CardWrapper className="flex !gap-5 flex-col">
                            <div className="flex gap-2.5 items-center mt-5">
                                <Heading className="text-xl">Standard</Heading>
                                <Paragraph>(2-4 business days for orders placed by 5pm EST):</Paragraph>
                            </div>
                            <p className={"flex flex-col"}>
                                <span className="text-xl text-g">
                                    – Free for logged-in NikePlus Members
                                </span>
                                <span className="text-xl text-g">
                                    – Free for guest orders of $150 or more
                                </span>
                                <span className="text-xl text-g">
                                    – $8 for guest orders of less than $150
                               </span>
                            </p>
                        </CardWrapper>
                    </div>
                    <div>
                        <CardWrapper className="flex !gap-5 flex-col">
                            <div className="flex gap-2.5 items-center mt-5">
                                <Heading className="text-xl">Next-day</Heading>
                                <Paragraph>(2-4 business days for orders placed by 5pm EST):</Paragraph>
                            </div>
                            <p className={"flex flex-col"}>
                                <span className="text-xl text-g">
                                    – $15 for logged-in NikePlus Members
                                </span>
                                <span className="text-xl text-g">
                                  – $25 for guest orders
                                </span>
                            </p>
                        </CardWrapper>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center bg-[#f5f7f8] gap-10 rounded p-10">
                    <Heading className="text-[30px]">Perfectly simple and distinguish?</Heading>
                    <Paragraph>
                        In a free hour, when our power of choice is untrammelled and when a nothing prevents our being
                        able to do what we like best but in certain circumstances and owing to the claims.
                    </Paragraph>
                    <div>
                        <p>
                            <span className="text-xl text-bCus">
                                - Frequently occur that pleasures
                            </span>
                        </p>
                        <p>
                            <span className="text-xl text-bCus">
                                - Welcomed and every
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;