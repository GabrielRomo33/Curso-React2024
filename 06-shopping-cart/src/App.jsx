import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { Products } from './components/Products'
import { useState } from 'react'

function App() {

  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  return (
    <>
      <h1>Shopping Cart 🛒</h1>
      <Products products={products}/>
    </>
  )
}

export default App
