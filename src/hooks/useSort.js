import {useMemo} from "react";

export const useSort = (products, sort) => {
	console.log(products)
	return useMemo(() => {
		if (sort) {
			return [...products].sort((a, b) => {
				const prepareObj = (obj) => {
					obj.price = obj.price.toString()
					return obj
				}
				return prepareObj(a)[sort].localeCompare(prepareObj(b)[sort])
			})
		}
		const prepareResult = (result) => {
			return result.map(item => ({
				title: item.title,
				price: Number(item.price)
			}))
		}
		return prepareResult(products)

	}, [sort, products])
}