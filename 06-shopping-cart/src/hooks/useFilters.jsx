import { useContext } from "react";
import { FiltersContext } from "../context/filter";

export function useFilters() {
    const {filters, setFilters} = useContext(FiltersContext);
  
    const filterProducts = (products) => {
      return products.filter(products => {
        return (
          products.price >= filters.minPrice && (
            filters.category === 'All' || products.category === filters.category
          )
        )
      })
    }
    return { filters, filterProducts, setFilters}
  }