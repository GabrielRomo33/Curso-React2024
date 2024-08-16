import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { Products } from './components/Products'
import { useState } from 'react'
import { Headre } from './components/Headre';

function App() {

  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = () => {
    // products.forEach(product => {
    //   console.log(product.category);
    // });
    return products.filter(products => {
      return (
        products.price >= filters.minPrice && (
          filters.category === 'all' || products.category === filters.category
        )
      )
    })
  }
  const filteredProducts = filterProducts(products);
  return (
    <>
      <h1>Shopping Cart 🛒</h1>
      <Headre/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
