import React, {memo} from "react";
import {Input} from "./UI/Input";

const Delivery = () => {
	return (
		<div className="content__container">
			<div className="delivery">
				<div className="delivery__wrapper">
					<h1 className="delivery__title">Доставка г. Москва</h1>
					<div className="delivery__toggle">
						<button className="delivery__button delivery__button_red">Доставка</button>
						<button className="delivery__button delivery__button_grey">Самовывоз</button>
					</div>
				</div>
				<div className="delivery__form">
					<Input
						label="Улица"
						placeholder="Улица"
					/>
					<Input
						label="Дом"
						placeholder="Дом"
					/>
				</div>
				<div className="delivery__prompt">
					Нужно заполнить для оформления доставки
				</div>
			</div>
		</div>
	);
};

export const MemoDelivery = memo(Delivery)