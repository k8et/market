import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import firebaseApp from "../../firebase/config";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const db = getFirestore(firebaseApp);
            const productsCollection = collection(db, 'Products');
            const productsSnapshot = await getDocs(productsCollection);
            return productsSnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    entities: [],
    status: 'idle',
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.entities = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    },
});
export const getProduct = () => (state) => state.products.entities;
export default productsSlice.reducer;
