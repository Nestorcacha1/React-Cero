import './filters.css'
import { useId } from 'react'
import { useFilters } from '../Hooks/useFilters.js'
export function Filters() {
	const { filter, setFilter } = useFilters()

	// const [minPrice, setMinPrice] = useState(0)
	const miniPriceId = useId()
	const categoryFilterId = useId()

	const handleMinPriceChange = event => {
		setFilter(prevState => ({
			...prevState,
			minPrice: event.target.value,
		}))
	}
	const handleChangeCategory = event => {
		setFilter(prevState => ({
			...prevState,
			category: event.target.value,
		}))
	}
	return (
		<section className='filters'>
			<div>
				<label htmlFor={miniPriceId}>Precio</label>
				<input
					type='range'
					id={miniPriceId}
					min='0'
					max='1000'
					onChange={handleMinPriceChange}
					value={filter.minPrice}
				/>
				<span>{filter.minPrice}</span>
			</div>
			<div>
				<label htmlFor={categoryFilterId}>Categoria</label>
				<select name='' id={categoryFilterId} onChange={handleChangeCategory}>
					<option value='all'>Todos</option>
					<option value='laptops'>Laptops</option>
					<option value='smartphones'>Celulares</option>
				</select>
			</div>
		</section>
	)
}
