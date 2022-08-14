import React from "react";

const categories = ["Бургеры", "Снэки", "Напитки", "Твистеры", "Курица", "Баскеты", "Соусы", "Кофе и чай", "Десерты", "Хиты по 50", "Хиты по 99"]

export const Navigation = ({activeCategory}) => {
	return (
		<div className="categories">
			<nav className="categories__nav">
				<ul className="categories__list">
					{categories.map(category =>
						<li
							key={category}
							className={activeCategory === category ? "categories__item _active" : "categories__item"}
						>
							{category}
						</li>)}
				</ul>
			</nav>
		</div>
	);
};