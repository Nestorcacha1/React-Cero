import './Footer.css'
// import { useFilters } from '../Hooks/useFilters'
import { useCart } from '../Hooks/useCart'
export function Footer() {
	// const { filters } = useFilters()
	//const { filter } = useFilters()
	const { cart } = useCart()
	return (
		<footer className='footer'>
			{/* {JSON.stringify(filter, null, 2)} */}
			{JSON.stringify(cart, null, 2)}
			<h4>
				Prueba técnica de React ⚛️ － <span>@Thrones_N</span>
			</h4>
			<h5>Shopping Cart con useContext & useReducer</h5>
		</footer>
	)
}
