import './Products.css'
import { AddToCartIcon } from './icons';

export function Products ({ products }) {
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