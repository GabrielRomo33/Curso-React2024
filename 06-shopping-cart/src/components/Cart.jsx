import React, { useId } from 'react'
import { CartIcon, ClearCartIcon } from './icons';
import './Cart.css'

export const Cart = () => {
    const cartCheckboxId = useId();
  return (
    <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input id={cartCheckboxId} type='checkbox' hidden/>

        <aside className='cart'>
            <ul>
                <li>
                    <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="Disk" />
                    <div>
                        <strong>Disk</strong>
                    </div>
                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
            <button>
                <ClearCartIcon />
            </button>
        </aside>
    </>
  )
}
