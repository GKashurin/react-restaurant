import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Delivery} from "../components/Delivery";
import {Navigation} from "../components/Navigation";
import {fetchProducts} from "../redux/actions/products";
import {Footer} from "../components/Footer";
import {MemoProducts} from "../components/Products";

export const Home = () => {
	const [activeCategory, setActiveCategory] = useState()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return (
		<>
			<Delivery/>
			<Navigation activeCategory={activeCategory}/>
			<MemoProducts setActiveCategory={setActiveCategory}/>
			<Footer/>
		</>
	);
};