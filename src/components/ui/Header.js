import React from 'react';
import {Link, useLocation} from "react-router-dom";
import cart from "../../assets/img/free-icon-shopping-cart-481384.png";
import logo from "../../assets/img/logo.png";
import {useSelector} from "react-redux";

const Header = () => {
    const cartItems = useSelector(state => state.cart.items);
    const location = useLocation();
    const getTotalItems = () => {
        return cartItems.length;
    }
    return (<div>
        <nav className="bg-white border-b-2 p-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className={"font-sans co"}>
                        <img className="w-8" src={logo} alt=""/>
                    </div>
                    <div className="flex space-x-4">
                        <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
                        <NavLink to="/shop/import" active={location.pathname === '/shop/import'}>Import</NavLink>
                        <NavLink to="/shop/premium" active={location.pathname === '/shop/premium'}>Premium</NavLink>
                        <NavLink to="/shop/value" active={location.pathname === '/shop/value'}>Value</NavLink>
                        <NavLink to="/delivery" active={location.pathname === '/delivery'}>Delivery</NavLink>
                        <NavLink to="/policy" active={location.pathname === '/policy'}>Privacy Policy</NavLink>
                        <div className="pl-10 flex items-center justify-center">
                            <Link to="/cart" className="text-bCus hover:text-gray-300">
                                    <span className="flex items-center justify-center">
                                        <img className="w-4" src={cart} alt=""/>
                                        <span
                                        className=" font-bold text-red-700 relative right-1 bottom-3">{getTotalItems()}
                                        </span>
                                    </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>);
};

const NavLink = ({to, active, children}) => (
    <Link to={to} className={`text-g text-xl hover:text-gray-300 ${active ? 'text-black border-b-2' : ''}`}>
        {children}
    </Link>);

export default Header;
