import React from "react";
import {Select} from "./UI/Select";

const Sort = ({filter, setFilter}) => {
	return (
		<Select
			value={filter.sort}
			onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
			defaultValue="Сортировка по"
			options={[
				{value: "title", name: "По названию"},
				{value: "price", name: "По цене"},
			]}
		/>
	);
};

export default Sort;