import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import Delivery from "../components/Delivery";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import {fetchProducts} from "../redux/actions/products";
import Footer from "../components/Footer";

const Home = ({cartItems, categories}) => {
	const getCategoryName = name => {
		if (name === "burgers") return "Бургеры"
		else if (name === "snacks") return "Снэки"
		else if (name === "drinks") return "Напитки"
		return ""
	}
	const [activeCategory, setActiveCategory] = useState()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return (
		<>
			<div className="content__container">
				<Delivery/>
			</div>
			{/*{categories?.map(item => (*/}
			{/*	<div>*/}
			{/*		*/}
			{/*	</div>))}*/}
			<Navigation
				items={categories}
				activeCategory={activeCategory}
			/>
			<div className="products">
				<div className="content__container">
					{categories?.map(category => (
						<div key={category.id}>
							<h3 className="products__title">{getCategoryName(category.name)}</h3>
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
			<Footer/>
		</>
	);
};

export default Home;