import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    total: calculateTotal(JSON.parse(localStorage.getItem('cartItems')) || []),
};

function calculateTotal(items) {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
            state.total = calculateTotal(state.items);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeItem(state, action) {
            const removedItem = state.items.find(item => item.id === action.payload);
            state.items = state.items.filter(item => item.id !== action.payload);
            state.total -= removedItem.price * removedItem.quantity;
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                state.total += (quantity - item.quantity) * item.price;
                item.quantity = quantity;
                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
