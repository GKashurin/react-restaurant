import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {sortProducts} from "../redux/reducers/productsSlice"
import {Select} from "./UI/Select";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const sortOptions = [
  { value: "name", name: "По названию" },
  { value: "price", name: "По цене" },
];

export const Sort = ({id, query, isSearch, name}) => {
	const [_, setSearchParams] = useSearchParams()
	const [filter, setFilter] = useState({sort: ""})
	const {sort} = filter;
	const dispatch = useDispatch()

	const onSort = (e) => {
		setFilter({...filter, sort: e});
		dispatch(sortProducts({
			sort: e, 
			id
		}))
	}

	const queries =
    sort || isSearch
      ? {
          _sort: sort,
          _query: isSearch ? query : "",
          _category: sort ? name : "",
        }
      : {};

	useEffect(() => {
		setSearchParams(queries)
	}, [sort, query])
	
	return (
		<Select
			value={sort}
			onChange={onSort}
			defaultValue="Сортировка по"
			options={sortOptions}
		/>
	);
};