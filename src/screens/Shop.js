import React, {useEffect, useState} from 'react';
import CardWrapper from "../components/CardWrapper";
import Heading from "../components/Heading";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import {useSelector} from "react-redux";
import {getProduct} from "../store/productSlice/productsSlice";
import CardData from "../components/CardData";
import {Link, useParams} from "react-router-dom";
import CustomLoader from "../components/CustomLoader";

const Shop = () => {
    const products = useSelector(getProduct());
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [options, setOptions] = useState([
        {id: 1, label: 'Import', value: 'import', checked: false},
        {id: 2, label: 'Value', value: 'value', checked: false},
        {id: 4, label: 'Premium', value: 'premium', checked: false}
    ]);
    const [optionsDiagonal, setOptionsDiagonal] = useState([
        {id: 5, label: '200', value: '200', checked: false},
        {id: 6, label: '300', value: '300', checked: false},
    ]);
    const {category} = useParams();

    const applyFilters = () => {
        let filteredProductsCopy = [...products];

        const selectedCategories = options.filter(option => option.checked).map(option => option.value);
        if (selectedCategories.length > 0) {
            filteredProductsCopy = filteredProductsCopy.filter(product => selectedCategories.includes(product.category));
        }
        const selectedDiagonals = optionsDiagonal.filter(option => option.checked).map(option => option.value);
        if (selectedDiagonals.length > 0) {
            filteredProductsCopy = filteredProductsCopy.filter(product => selectedDiagonals.includes(product.screenDiagonal));
        }

        setFilteredProducts(filteredProductsCopy);
    };

    const applyFiltersWithCategory = () => {
        if (category) {
            const filteredProductsCopy = products.filter(product => product.category === category);
            setFilteredProducts(filteredProductsCopy);
        }
    };
    const resetFilters = () => {
        setOptions(options.map(option => ({...option, checked: false})));
        setOptionsDiagonal(optionsDiagonal.map(option => ({...option, checked: false})));
    };
    useEffect(() => {
        if (category) {
            applyFiltersWithCategory();
        } else {
            applyFilters();
        }
    }, [products, category]);

    useEffect(() => {
        resetFilters();
    }, [category]);

    if (!products || products.length === 0) {
        return <CustomLoader />;
    }

    return (
        <div className="pt-20 pb-20 h-full justify-center flex flex-col items-center">
            <div className="w-[66%]">
                <CardWrapper className="flex  flex-col items-center justify-center">
                    <Heading
                        className="pb-10">{!category ? "Shop" : category.charAt(0).toUpperCase() + category.slice(1)}</Heading>
                    <div className="flex w-full">
                        <div className="w-[300px] flex flex-col gap-2.5">
                            <Heading className="!text-xl">Product categories</Heading>
                            <Checkbox setOptions={setOptions} options={options}/>
                            <Heading className="!text-xl">Screen diagonal</Heading>
                            <Checkbox setOptions={setOptionsDiagonal} options={optionsDiagonal}/>
                            <Button className="w-[50%]" black text={"FILTER"} onClick={applyFilters}/>
                        </div>
                        <div className="w-full flex flex-wrap gap-10">
                            {filteredProducts.map((product, index) => (
                                <Link to={`/product/${product.id}`} key={index}>
                                    <CardData item={product}/>
                                </Link>
                            ))}
                        </div>
                    </div>
                </CardWrapper>
            </div>
        </div>
    );
};

export default Shop;
