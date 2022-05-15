import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router";
import Cart from "./pages/Cart";
import {useSelector} from "react-redux";

const App = () => {
	const cartItems = useSelector(state => state.cart.items);
	const categories = useSelector(state => state.products.items)
	const categoryNames = categories.map(category => category.name)

	return (
		<div className="wrapper">
			<Header/>
			<div className="content">
				<Routes>
					<Route path="/" element={
						<Home
							cartItems={cartItems}
							categories={categories}
						/>}
					/>
					<Route path="/cart" element={
						<Cart
							cartItems={cartItems}
							categoryNames={categoryNames}
						/>}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
