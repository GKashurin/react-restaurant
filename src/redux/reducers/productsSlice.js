import {createSlice} from "@reduxjs/toolkit";
import {fetchProducts} from "../actions/products";

const initialState = {
	items: [],
	isLoaded: false,
	error: "",
};

export const products = createSlice({
	name: "products",
	initialState,
	reducers: {
		sortProducts(state, action) {
			const {sort, id} = action.payload;
			const targetCategory = state.items.find(item => item.id === id)
			const sortedCategory = {
				...targetCategory,
				products: targetCategory.products.sort((a, b) => {
					const prepareObj = (obj) => {
						obj.price = obj.price.toString()
						return obj
					}
					return prepareObj(a)[sort].localeCompare(prepareObj(b)[sort])
				})
			}
			state.items = state.items.map(category => category.id === id ? sortedCategory : category)
		}
	},

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
const { actions, reducer } = products;
export const { sortProducts } = actions
export default reducer;