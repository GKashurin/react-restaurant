import React, {useRef, useState} from "react";
import {addProductToCart, minusCartItem} from "../redux/actions/cart";
import {useDispatch} from "react-redux";
import {useIntersection} from "../hooks/useIntersectionObserver";

const Product = ({product, category, cartItems, setActiveCategory, getCategoryName}) => {
	const [isInView, setIsInView] = useState(false);
	const dispatch = useDispatch()

	const imgRef = useRef();
	useIntersection(imgRef, () => {
		setIsInView(true);
		setActiveCategory(getCategoryName(imgRef.current.parentElement.id))
		// console.log(getCategoryName(imgRef.current.parentElement.id))
	});

	return (
		<li
			className="product"
			ref={imgRef}
		>
			{
				isInView && (
					<div className="product__wrapper">
						<figure className="product__picture">
							<img src={product.img} alt={product.name}/>
							<figcaption className="product__title">
								{product.name}
							</figcaption>
						</figure>
						<div className="product__price">{product.price}&nbsp;₽</div>
					</div>
				)
			}
			{(product.isNew || product.isHit) &&
			<div className={product.isNew
				? "product__mark product__mark_new"
				: "product__mark product__mark_hit"}
			>{product.isNew ? "Новое" : "Хит"}
			</div>}
			{!cartItems[category][product.id]?.length
				? <div
					className="product__mark product__mark_plus"
					role="button"
					onClick={() => dispatch(addProductToCart(category, product))}
				>+
				</div>
				: <div className="product__counter">
					<span
						onClick={() => dispatch(minusCartItem(category, product))}
						role="button"
					>-
					</span>
					<span>{cartItems[category][product.id]?.length}</span>
					<span
						onClick={() => dispatch(addProductToCart(category, product))}
						role="button"
					>+
					</span>
				</div>}
		</li>
	);
};

export default Product;