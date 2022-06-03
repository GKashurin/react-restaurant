import {configureStore, combineReducers} from '@reduxjs/toolkit'
import products from "../reducers/productsSlice";
import cart from "../reducers/cartSlice";

const rootReducer = combineReducers({
	products,
	cart
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}