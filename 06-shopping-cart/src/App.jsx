import { products as initialProducts } from './mocks/products.json'
import './App.css'
import { Products } from './components/Products'
import { Headre } from './components/Headre';
import { Footer } from './components/Footer';
import { IS_DEVELOPMENT } from './config';
import { useFilters } from './hooks/useFilters';
import { useState } from 'react';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart.jsx';

// products.forEach(product => {
//   console.log(product.category);
// });


function App() {
  const [products] = useState(initialProducts);
  const {filters, filterProducts} = useFilters();
  const filteredProducts = filterProducts(products);
  return (
    <CartProvider>
      <h1>Shopping Cart 🛒</h1>
      <Headre />
      <Cart />
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
