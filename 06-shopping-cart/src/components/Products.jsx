import './Products.css'
import { AddToCartIcon } from './icons';

export function Products ({ products }) {
    return (
        <main className='products'>
            <ul>
                {products.map(products => (
                <li key={products.id}>
                    <img src={products.thumbnail} alt={products.title} />
                    <div>
                        <strong>{products.title}</strong> - ${products.price}
                    </div>
                    <div>
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