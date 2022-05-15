const initialState = {
	items: {
		drinks: {},
		burgers: {},
		snacks: {},
	},
	totalPrice: 0,
	totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT_CART": {
			const {key, value} = action.payload;
			return {
				...state,
				items: {
					...state.items,
					[key]: {
						...state.items[key],
						[value.id]: !state.items[key][value.id] ? [value] : [...state.items[key][value.id], value]
					}
				},
				totalPrice: state.totalPrice + value.price,
				totalCount: state.totalCount + 1,
			}
		}
		case "CLEAR_CART": {
			return {
				...state,
				items: {
					drinks: {},
					burgers: {},
					snacks: {},
				},
				totalPrice: 0,
				totalCount: 0,
			}
		}
		case "MINUS_CART_ITEM": {
			const {key, value} = action.payload;
			const arr = state.items[key][value.id]
			return {
				...state,
				items: {
					...state.items,
					[key]: {
						...state.items[key],
						[value.id]: arr.filter((item, idx) => idx < arr.length - 1)
					}
				},
				totalPrice: state.totalPrice - value.price,
				totalCount: state.totalCount - 1,
			};
		}
		case "REMOVE_CART_ITEM": {
			const {key, value} = action.payload;
			const productCount = state.items[key][value.id].length
			return {
				...state,
				items: {
					...state.items,
					[key]: {
						...state.items[key],
						[value.id]: [],
					}
				},
				totalPrice: state.totalPrice - value.price * productCount,
				totalCount: state.totalCount - productCount,
			}
		}
		default:
			return state;
	}
};

export default cartReducer;