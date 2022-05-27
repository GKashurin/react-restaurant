export const setProducts = products => ({
	type: "SET_PRODUCTS", payload: products
})

export const setLoaded = payload => ({
	type: "SET_LOADED", payload,
})

export const fetchProducts = () => dispatch => {
	dispatch(setLoaded(true))
	fetch("http://localhost:3000/db.json")
		.then(resp => resp.json())
		.then(data => {
			dispatch(setProducts(data.categories));
			dispatch(setLoaded(false))
		})
		.catch(error => {
			console.log(error);
			dispatch(setLoaded(false))
		})
}