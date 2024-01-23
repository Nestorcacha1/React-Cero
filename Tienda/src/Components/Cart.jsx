import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './icons'
import './carts.css'
import { useCart } from '../Hooks/useCart.js'

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
	return (
		<li>
			<img src={thumbnail} alt={title} />
			<div>
				<strong>{title}</strong> - ${price}
			</div>
			<footer>
				<button>Cantidad: {quantity}</button>
				<button onClick={addToCart}>+</button>
			</footer>
		</li>
	)
}

export function Cart() {
	const cartChechboxId = useId()
	const { cart, clearCart, addToCart } = useCart()
	return (
		<>
			<label className='cart-button' htmlFor={cartChechboxId}>
				<CartIcon />
			</label>
			<input id={cartChechboxId} type='checkbox' hidden />
			<aside className='cart'>
				<ul>
					{cart.map(product => (
						<CartItem
							key={product.id}
							addToCart={() => addToCart(product)}
							{...product}
						/>
					))}
				</ul>
				<button onClick={clearCart}>
					<ClearCartIcon></ClearCartIcon>
				</button>
			</aside>
		</>
	)
}
