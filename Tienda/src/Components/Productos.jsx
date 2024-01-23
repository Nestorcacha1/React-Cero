import './productos.css'
import { AddToCartIcon, RemoveFromCartIcon } from './icons.jsx'
import { useCart } from '../Hooks/useCart.js'

export function Productos({ productos }) {
	const { addToCart, removeFromCart, cart } = useCart()
	const checkProductInCart = producto => {
		return cart.some(item => item.id === producto.id)
	}
	return (
		<main className='products'>
			<ul>
				{productos.map(producto => {
					const isProductInCart = checkProductInCart(producto)
					return (
						<li key={producto.id}>
							<img src={producto.thumbnail} alt={producto.title} />
							<div>
								<strong>{producto.title}</strong> - ${producto.price}
							</div>
							<div>
								<button
									style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
									onClick={() => {
										isProductInCart
											? removeFromCart(producto)
											: addToCart(producto)
									}}
								>
									{isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
								</button>
							</div>
						</li>
					)
				})}
			</ul>
		</main>
	)
}
