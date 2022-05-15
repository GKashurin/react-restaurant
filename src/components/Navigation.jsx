import React, {useMemo} from "react";

const Navigation = React.memo(({activeCategory, items}) => {
	const categories = useMemo(() => ["Бургеры", "Снэки", "Напитки", "Твистеры", "Курица", "Баскеты", "Соусы", "Кофе и чай", "Десерты", "Хиты по 50", "Хиты по 99"], []);

	return (
		<div className="categories">
			<nav className="categories__nav">
				<ul className="categories__list">
					{items.map(category =>
						<li
							key={category.name}
							className={activeCategory === category ? "categories__item _active" : "categories__item"}
						>
							{category.name}
						</li>)}
				</ul>
			</nav>
		</div>
	);
});

export default Navigation;