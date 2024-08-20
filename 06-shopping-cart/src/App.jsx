import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { Products } from './components/Products'
import { useState } from 'react'
import { Headre } from './components/Headre';
import { Footer } from './components/Footer';
import { IS_DEVELOPMENT } from './config';

function useFilters() {
  const [filters, setFilters] = useState({
    category: 'All',
    minPrice: 0,
  })
  const filterProducts = (products) => {
    // products.forEach(product => {
    //   console.log(product.category);
    // });
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

function App() {
  const [products] = useState(initialProducts);
  const {filters, filterProducts, setFilters} = useFilters();
  const filteredProducts = filterProducts(products);
  return (
    <>
      <h1>Shopping Cart 🛒</h1>
      <Headre changeFilters={setFilters}/>
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer filters={filters}/>}
    </>
  )
}

export default App
