import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {sortProducts} from "../redux/reducers/productsSlice"
import {Select} from "./UI/Select";

export const Sort = ({id}) => {
	const [filter, setFilter] = useState({sort: ""})
	const dispatch = useDispatch()

	const onSort = (e) => {
		setFilter({...filter, sort: e});
		dispatch(sortProducts({
			sort: e, 
			id
		}))
	}
	return (
		<Select
			value={filter.sort}
			onChange={selectedSort => onSort(selectedSort)}
			defaultValue="Сортировка по"
			options={[
				{value: "name", name: "По названию"},
				{value: "price", name: "По цене"},
			]}
		/>
	);
};