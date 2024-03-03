import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/productSlice/cartSlice';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Paragraph from "../components/Paragraph";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
        return totalPrice.toFixed(1);
    };

    const calculateItemTotalPrice = (item) => {
        const totalPrice = item.price * (item.quantity || 1);
        return totalPrice.toFixed(1);
    };
    if (cartItems.length === 0){
        return <div className="w-full h-[500px] flex items-center justify-center">Your cart is currently empty.</div>
    }
    return (
        <div className="pt-20 pb-20 h-full justify-center flex flex-col items-center">
            <div className="w-[66%]">
                <div className="w-full flex items-center justify-center pb-10">
                    <Heading>Shopping Cart</Heading>
                </div>
                <div className="flex justify-center gap-10">
                    <div>
                        <table>
                            <thead className="border-2">
                            <tr>
                                <th></th>
                                <th className="pl-10">Product</th>
                                <th className="pr-3">Price</th>
                                <th className="pl-5">Quantity</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody className="border-2">
                            {cartItems.map(item => (
                                <tr key={item.id} className="border-gray-50">
                                    <td className="p-2" ><img className="w-20" src={item.image} alt={item.title} /></td>
                                    <td className="rounded  pl-10"><Heading className={"text-xl"}>{item.title}</Heading></td>
                                    <td className="w-36 pl-10">${calculateItemTotalPrice(item)}</td>
                                    <td className="rounded pl-10">
                                        <input
                                            className="w-8"
                                            type="number"
                                            value={item.quantity || 1}
                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                            min="1"
                                        />
                                    </td>
                                    <td className="rounded pl-10 pr-3"><Button text="Remove" onClick={() => handleRemoveItem(item.id)} /></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex p-5 h-full w-[300px] flex-col gap-2.5 border-2 ">
                        <Heading className="text-xl">CART TOTALS</Heading>
                        <Paragraph className="text-xl">Total: ${calculateTotalPrice()}</Paragraph>
                        <Button text={"PROCEED TO CHECKOUT"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
