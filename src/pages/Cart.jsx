import React from "react";
import {useSelector} from "react-redux";
import {CartItem} from "../components/cart/CartItem";
import {allCategories, itemsInCart, totalPriceSelector} from "../redux/selectors";
import {CartEmpty} from "../components/cart/CartEmpty";
import {MemoCartTop} from "../components/cart/CartTop";
import {CartBottom} from "../components/cart/CartBottom";

export const Cart = () => {
	const cartItems = useSelector(itemsInCart);
	const categories = useSelector(allCategories)
	const categoryNames = categories.map(category => category.name)
	const totalPrice = useSelector(totalPriceSelector);

	const getProductsInCart = () => {
		return categoryNames.reduce((acc, category) => {
			acc[category] = Object.values(cartItems[category])
			return acc;
		}, {})
	}
	const productsInCart = getProductsInCart();

	const renderProductsImCart = (category) => {
		return productsInCart[category].map(items => items.filter((item, i) => {
				if (i === 0) return item
			}).map(product => (
				<CartItem
					key={product.id}
					product={product}
					count={items.length}
					category={category}
				/>
			))
		)
	}

	return (
		<div className="container container--cart">
			{!!totalPrice ? (
				<div className="cart">
					<MemoCartTop />
					<div className="content__items">
						{categoryNames.map(category => renderProductsImCart(category))}
					</div>
					<CartBottom />
				</div>
			) : (
				<CartEmpty />
			)}
		</div>
	);
};
