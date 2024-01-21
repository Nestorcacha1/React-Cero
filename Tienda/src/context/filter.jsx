import { createContext, useState } from 'react'
// Crear el context
export const FilterContext = createContext()

// Crear el provider
export function FiltersProvider({ children }) {
	const [filter, setFilter] = useState({
		category: 'all',
		minPrice: 250,
	})
	return (
		<FilterContext.Provider
			value={{
				filter,
				setFilter,
			}}
		>
			{children}
		</FilterContext.Provider>
	)
}
