import React, {memo, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useSearch} from "../hooks/useSearch";
import {Sort} from "./Sort";
import {Product} from "./Product";
import {allCategories, itemsInCart} from "../redux/selectors";
import {fetchProducts} from "../redux/actions/products";
import {useDispatch} from "react-redux";

const getCategoryName = (name) => {
  if (name === "burgers") return "Бургеры";
  else if (name === "snacks") return "Снэки";
  else if (name === "drinks") return "Напитки";
  return "";
}

const Products = ({setActiveCategory, query}) => {
	const categories = useSelector(allCategories)
	const cartItems = useSelector(itemsInCart);
	const searchProducts = useSearch(categories, query)
	const dispatch = useDispatch()
	const isSearch = query.length > 2;
	
	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return (
    <div className="products">
      <div className="content__container">
        {isSearch
		? searchProducts.map((category) => category.products.length > 0 && (
			<div key={category.id}>
            <h3 className="products__title">
              {getCategoryName(category.name)}
            </h3>
            <Sort id={category.id} query={query} isSearch={isSearch} name={category.name}/>
            <ul className="products__list" id={category.name}>
              {category.products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  cartItems={cartItems}
                  category={category.name}
                  setActiveCategory={setActiveCategory}
                  getCategoryName={getCategoryName}
                />
              ))}
            </ul>
          </div>
		))
		: categories?.map((category) => (
          <div key={category.id}>
            <h3 className="products__title">
              {getCategoryName(category.name)}
            </h3>
            <Sort id={category.id} name={category.name}/>
            <ul className="products__list" id={category.name}>
              {category.products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  cartItems={cartItems}
                  category={category.name}
                  setActiveCategory={setActiveCategory}
                  getCategoryName={getCategoryName}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export const MemoProducts = memo(Products)