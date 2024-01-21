import { useContext } from 'react'
import { FilterContext } from '../context/filter'
export function useFilters() {
    const { filter, setFilter } = useContext(FilterContext)

    const filterProducts = products => {
        return products.filter(product => {
            return (
                product.price >= filter.minPrice &&
                (filter.category === 'all' || product.category === filter.category)
            )
        })
    }
    return { filter, setFilter, filterProducts }
}
