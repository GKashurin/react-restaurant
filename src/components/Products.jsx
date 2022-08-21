import React, {memo} from 'react';
import {useSelector} from "react-redux";
import {Sort} from "./Sort";
import {Product} from "./Product";
import {allCategories, itemsInCart} from "../redux/selectors";

const getCategoryName = (name) => {
	if (name === "burgers") return "Бургеры"
	else if (name === "snacks") return "Снэки"
	else if (name === "drinks") return "Напитки"
	return ""
}

const Products = ({setActiveCategory}) => { // c memo 2 рендера, без memo 5
	const categories = useSelector(allCategories)
	const cartItems = useSelector(itemsInCart);
	return (
		<div className="products">
			<div className="content__container">
				{categories?.map(category => (
					<div key={category.id}>
						<h3 className="products__title">{getCategoryName(category.name)}</h3>
						<Sort id={category.id} />
						<ul
							className="products__list"
							id={category.name}
						>
							{category.products.map(product =>
								<Product
									key={product.id}
									product={product}
									cartItems={cartItems}
									category={category.name}
									setActiveCategory={setActiveCategory}
									getCategoryName={getCategoryName}
								/>
							)}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};
export const MemoProducts = memo(Products)