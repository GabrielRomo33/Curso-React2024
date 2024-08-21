import { createContext, useState } from 'react'
// creamos el contexto
export const FiltersContext = createContext();

// creamos el provider para proveer el contexto 
export function FiltersProvider ({children}) {
    const [filters, setFilters] = useState({
        category: 'All',
        minPrice: 0,
    });
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}