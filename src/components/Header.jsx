import React from "react";
import {Link} from "react-router-dom";
import burgerIcon from "../assets/BurgerMenu.svg";
import cartIcon from "../assets/Basket.svg";
import {useSelector} from "react-redux";

const Header = () => {
	const totalPrice = useSelector(state => state.cart.totalPrice);
	return (
		<header className="header">
			<div className="container">
				<Link to="/">
					<div className="header__logo">
						<img src={burgerIcon} alt="burger icon"/>
					</div>
				</Link>
				<div className="header__decor">
					<span/>
					<span/>
					<span/>
				</div>
				<div className="header__cart">
					<Link to="/cart">
						<button className="button__cart">
                            <span>
                                {totalPrice}&nbsp;₽
                            </span>
							<img src={cartIcon} alt="cart icon" />
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;