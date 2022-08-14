import React from "react";

export const Input = ({label, placeholder}) => {
	return (
		<div className="input-wrapper">
			<label>{label}</label>
			<input
				type="text"
				placeholder={placeholder}
			/>
		</div>
	);
};