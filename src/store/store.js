import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice/productsSlice';
import cartReducer from './productSlice/cartSlice';

const rootReducer = {
    products: productsReducer,
    cart: cartReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
