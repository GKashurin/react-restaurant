export const addProductToCart = (category, product) => ({
	type: "ADD_PRODUCT_CART",
	payload: {
		key: category,
		value: product,
	},
});

export const clearCart = () => ({
	type: "CLEAR_CART",
});

export const removeCartItem = (category, product) => ({
	type: "REMOVE_CART_ITEM",
	payload: {
		key: category,
		value: product,
	},
});

export const minusCartItem = (category, product) => ({
	type: "MINUS_CART_ITEM",
	payload: {
		key: category,
		value: product,
	},
});
