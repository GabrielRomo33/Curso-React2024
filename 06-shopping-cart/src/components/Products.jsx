import { useCart } from '../hooks/useCart';
import './Products.css'
import { AddToCartIcon } from './icons';

export function Products ({ products }) {
    const {addToCart, cart} = useCart();
    return (
        <main className='products'>
            <ul>
                {products.slice(0,20).map(products => (
                <li key={products.id}>
                    <img src={products.image} alt={products.title} />
                    <div>
                        <strong>{products.title}</strong> - ${products.price}
                    </div>
                    <div>
                        <br />
                        <button>
                            <AddToCartIcon />
                        </button>
                    </div>
                </li>
                ))}
            </ul>
        </main>
    )
}