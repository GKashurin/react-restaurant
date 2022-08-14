import React from 'react';
import cartEmptyImage from "../../assets/empty-cart.png";
import {Link} from "react-router-dom";

export const CartEmpty = () => {
	return (
		<div className="cart cart--empty">
			<h2>
				Корзина пустая <i>😕</i>
			</h2>
			<p>
				Вероятней всего, вы еще не выбрали себе вкусняшку.
				<br/>
				Для того, чтобы выбрать ее, перейдите на главную страницу.
			</p>
			<img src={cartEmptyImage} alt="Empty cart"/>
			<Link to="/" className="button button--black">
				<span>Вернуться назад</span>
			</Link>
		</div>
	);
};