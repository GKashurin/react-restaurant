import React from "react";

export const Input = (props) => {
	return (
		<div className="input-wrapper">
			<label>{props.label}</label>
			<input
				type="text"
				{...props}
			/>
		</div>
	);
};