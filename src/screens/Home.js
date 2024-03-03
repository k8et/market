import React from 'react';
import Button from "../components/Button";
import CardWrapper from "../components/CardWrapper";
import k from "../assets/img/k.jpg"
import Card from "../components/Card";
import Import from "../assets/img/free-icon-cargo-boat-3436131.png"
import Natural from "../assets/img/free-icon-milk-carton-11742436.png"
import Premium from "../assets/img/premium.png"
import Value from "../assets/img/value.png"
import Domestic from "../assets/img/domestic.png"
import MySlider from "../components/Slider";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import {useSelector} from "react-redux";
import {getProduct} from "../store/productSlice/productsSlice";
import {Link} from "react-router-dom";
import SubscribeBtn from "../components/SubscribeBtn";
import CustomLoader from "../components/CustomLoader";

const Home = () => {
    const product = useSelector(getProduct())
    const cards = [
        {
            img: Import,
            title: "Import",
            text: "These cases are perfectly simple to distinguish.",
        },
        {
            img: Natural,
            title: "Natural fermentation",
            text: "The method is based on the natural fermentation.",
        },
        {
            img: Premium,
            title: "Premium",
            text: "Cases are perfectly simple distinguish in these.",
        },
        {
            img: Value,
            title: "Value",
            text: "Simple distinguish these cases are perfectly.",
        },
        {
            img: Domestic,
            title: "Domestic Specialty",
            text: "Perfectly there an simple distinguish cases.",
        },
    ];
    if (!product || product.length === 0) {
        return <CustomLoader />;
    }
    return (
        <div className="pt-20 justify-center flex flex-col items-center">
            <div className="w-[66%]">
                <div className="flex items-center">
                    <div className=" w-[50%]">
                        <CardWrapper>
                            <Heading className="text-5xl font-bold">Welcome to the world of real kumys!</Heading>
                            <Paragraph className="text-xl">
                                We believe that kumiss is not just a drink, it is a source of living energy that
                                inspires people to a healthy lifestyle and active self-expression. That is why our
                                network of stores is designed to give you a unique experience of true kumys.
                            </Paragraph>
                            <Link to={"/shop"}>
                                <Button black text="SHOP NOW"/>
                            </Link>
                        </CardWrapper>
                    </div>
                    <div className="w-[50%]">
                        <img className="rounded" src={k} alt="s"/>
                    </div>
                </div>
                <div className="pt-20">
                    <CardWrapper className="flex-col items-center justify-center">
                        <Heading className="text-5xl font-bold">Chose your Kumys!</Heading>
                        <div className="flex gap-5">
                            {cards.map((card, index) => (
                                <Card key={index} {...card} />
                            ))}
                        </div>
                        <Link to={"/shop"}>
                            <Button text={"SEE ALL KUMYS"}/>
                        </Link>
                    </CardWrapper>
                </div>
                <div className="pt-20">
                    <CardWrapper className={"w-full !gap-0 flex flex-col items-center justify-center pb-10"}>
                        <Paragraph>SEE WHAT’S</Paragraph>
                        <Heading>Sale of Kumys</Heading>
                    </CardWrapper>
                    <MySlider mockData={product}/>
                </div>
                <div className="pt-20 pb-20 w-full flex items-center justify-center">
                    <div className="w-full">
                        <Heading>Subscribe</Heading>
                        <Paragraph>Sign up for our newsletter to receive the latest Kumys Store.</Paragraph>
                    </div>
                    <SubscribeBtn/>
                </div>

            </div>
        </div>
    );
};

export default Home;