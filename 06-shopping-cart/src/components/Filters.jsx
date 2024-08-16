import React from 'react'
import './Filters.css'

export function Filters()  {
  return (
    <section className='filters'>
        <div>
            <label htmlFor="price">minimum price: </label>
            <input 
            type="range" 
            name="prices" 
            id="price"
            min={0}
            max={1000} />
            <span>{}</span>
        </div>
        <div>
            <label htmlFor="category">category: </label>
            <select id="category">
                <option value="All">All</option>
                <option value="">women's clothing</option>
                <option value="">men's clothing</option>
                <option value="">jewelery</option>
                <option value="">electronics</option>
            </select>
        </div>
    </section>
  )
}
