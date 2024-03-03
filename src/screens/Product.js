import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../store/productSlice/productsSlice";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import {addItem} from "../store/productSlice/cartSlice";
import CustomLoader from "../components/CustomLoader";
import Alert from "../components/Alert";

const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProduct())
    const [showAlert, setShowAlert] = useState(false);
    const {id} = useParams();
    const product = products.find(product => product.id === id);
    if (!product || product.length === 0) {
        return <CustomLoader />;
    }
    const addToCart = () => {
        dispatch(addItem(product));
        setShowAlert(true);
    };
    const handleCloseAlert = () => {
        setShowAlert(false);
    };
    return (
        <div className="pt-20 pb-20 h-full justify-center flex flex-col items-center">
            <div className="w-[66%]">
                <div className="flex gap-52">
                    <div>
                        <img className="rounded" src={product.image} alt={product.title}/>
                    </div>
                    <div className="flex flex-col gap-20">
                        <div>
                            <Heading>{product.title}</Heading>
                            <Heading>${product.price}</Heading>
                        </div>
                        <div className="flex gap-52">
                            <div className="flex flex-col">
                                <Heading className={"text-xl"}>Description</Heading>
                                <Paragraph>{product.description}</Paragraph>
                            </div>
                            <div>
                                <Heading className={"text-xl"}>Category</Heading>
                                <Paragraph>{product.category}</Paragraph>
                            </div>
                        </div>
                        <Heading className={"text-xl"}>Screen Diagonal: {product.screenDiagonal}ml</Heading>
                        <Button onClick={addToCart} black text={"ADD TO CART"}/>
                    </div>
                </div>
            </div>
            {showAlert && (
                <Alert
                    type="success"
                    message="Add to cart!"
                    onClose={handleCloseAlert}
                />
            )}
        </div>
    );
};

export default Product;
