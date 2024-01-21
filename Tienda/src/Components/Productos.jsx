import './productos.css'
import { AddToCartIcon } from './icons.jsx'

export function Productos({ productos }) {
	return (
		<main className='products'>
			<ul>
				{productos.map(producto => (
					<li key={producto.id}>
						<img src={producto.thumbnail} alt={producto.title} />
						<div>
							<strong>{producto.title}</strong> - ${producto.price}
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
