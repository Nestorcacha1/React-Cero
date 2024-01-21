import './Footer.css'
import { useFilters } from '../Hooks/useFilters'
export function Footer() {
	// const { filters } = useFilters()
	const { filter } = useFilters()
	return (
		<footer className='footer'>
			{JSON.stringify(filter)}
			{/* <h4>
				Prueba técnica de React ⚛️ － <span>@Thrones_N</span>
			</h4>
			<h5>Shopping Cart con useContext & useReducer</h5> */}
		</footer>
	)
}
