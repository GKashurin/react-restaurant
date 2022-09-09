import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	items: {
		drinks: {},
		burgers: {},
		snacks: {},
	},
	totalPrice: 0,
	totalCount: 0,
};

export const cart = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCart(state, action) {
			const {key, value} = action.payload;
			state.items = {
				...state.items,
				[key]: {
					...state.items[key],
					[value.id]: !state.items[key][value.id] ? [value] : [...state.items[key][value.id], value]
				}
			}
			state.totalPrice = state.totalPrice + Number(value.price)
			state.totalCount = state.totalCount + 1
		},
		clearCart(state) {
			state.items = {
				drinks: {},
				burgers: {},
				snacks: {},
			}
			state.totalPrice = 0
			state.totalCount = 0
		},
		removeCartItem(state, action) {
			const {key, value} = action.payload;
			const productCount = state.items[key][value.id].length
			state.items = {
				...state.items,
				[key]: {
					...state.items[key],
					[value.id]: [],
				}
			}
			state.totalPrice = state.totalPrice - value.price * productCount
			state.totalCount = state.totalCount - productCount

		},
		minusCartItem(state, action) {
			const {key, value} = action.payload;
			const arr = state.items[key][value.id]
			state.items = {
				...state.items,
				[key]: {
					...state.items[key],
					[value.id]: arr.filter((item, idx) => idx < arr.length - 1)
				}
			}
			state.totalPrice = state.totalPrice - value.price
			state.totalCount = state.totalCount - 1
		}
	},
})
const {actions, reducer} = cart;
export const {addProductToCart, clearCart, minusCartItem, removeCartItem} = actions;
export default reducer;