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
			state.totalPrice = state.totalPrice + value.price
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

// const cartSlice = (state = initialState, action) => {
// 	switch (action.type) {
// 		case "ADD_PRODUCT_CART": {
// 			const {key, value} = action.payload;
// 			return {
// 				...state,
// 				items: {
// 					...state.items,
// 					[key]: {
// 						...state.items[key],
// 						[value.id]: !state.items[key][value.id] ? [value] : [...state.items[key][value.id], value]
// 					}
// 				},
// 				totalPrice: state.totalPrice + value.price,
// 				totalCount: state.totalCount + 1,
// 			}
// 		}
// 		case "CLEAR_CART": {
// 			return {
// 				...state,
// 				items: {
// 					drinks: {},
// 					burgers: {},
// 					snacks: {},
// 				},
// 				totalPrice: 0,
// 				totalCount: 0,
// 			}
// 		}
// 		case "MINUS_CART_ITEM": {
// 			const {key, value} = action.payload;
// 			const arr = state.items[key][value.id]
// 			return {
// 				...state,
// 				items: {
// 					...state.items,
// 					[key]: {
// 						...state.items[key],
// 						[value.id]: arr.filter((item, idx) => idx < arr.length - 1)
// 					}
// 				},
// 				totalPrice: state.totalPrice - value.price,
// 				totalCount: state.totalCount - 1,
// 			};
// 		}
// 		case "REMOVE_CART_ITEM": {
// 			const {key, value} = action.payload;
// 			const productCount = state.items[key][value.id].length
// 			return {
// 				...state,
// 				items: {
// 					...state.items,
// 					[key]: {
// 						...state.items[key],
// 						[value.id]: [],
// 					}
// 				},
// 				totalPrice: state.totalPrice - value.price * productCount,
// 				totalCount: state.totalCount - productCount,
// 			}
// 		}
// 		default:
// 			return state;
// 	}
// };
//
// export default cartSlice;