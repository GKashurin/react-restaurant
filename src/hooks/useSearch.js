import { useMemo } from "react"

export const useSearch = (categories, query) => {
  const searchedProducts = useMemo(
    () =>
      categories.map((category) => {
        return {
          ...category,
          products: category.products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          ),
        };
      }),
    [categories, query]
  );
  return searchedProducts;
}