import React, { useId, useState } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters';

export function Filters()  {
  const {setFilters} = useFilters();
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value,
    }));
  }
  return (
    <section className='filters'>
        <div>
            <label htmlFor={minPriceFilterId}>minimum price: </label>
            <input 
            type="range" 
            name="prices" 
            id={minPriceFilterId}
            min={0}
            max={1000} 
            onChange={handleChangeMinPrice}/>
            <span>{minPrice}</span>
        </div>
        <div>
            <label htmlFor={categoryFilterId} >category: </label>
            <select id={categoryFilterId} onChange={handleChangeCategory} >
                <option value="All">All</option>
                <option value="women's clothing">women's clothing</option>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
            </select>
        </div>
    </section>
  )
}
