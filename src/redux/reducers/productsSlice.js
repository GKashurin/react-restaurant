import {createSlice} from "@reduxjs/toolkit";
import {fetchProducts} from "../actions/products";

const initialState = {
	items: [],
	isLoaded: false,
	error: ''
};

export const products = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchProducts.pending.type]: (state) => {
			state.isLoaded = true
		},
		[fetchProducts.fulfilled.type]: (state, action) => {
			state.items = action.payload.categories
			state.isLoaded = false
		},
		[fetchProducts.rejected.type]: (state, action) => {
			state.error = action.payload
			state.isLoaded = false
		},
	}
})
const { reducer } = products;
export default reducer;