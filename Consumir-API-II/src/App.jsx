import './App.css'
import { UsarPeluculas } from './hooks/UsarPeliculas'
import { Peliculas } from './components/Peliculas'
import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'
function buscarP() {
	const [buscar, actualizarBuscar] = useState('')
	const [error, setError] = useState(null)
	const primerInput = useRef(true)

	useEffect(() => {
		if (primerInput.current) {
			primerInput.current = buscar === ''
			return
		}
		if (buscar === '') {
			setError('Ingrese un nombre de pelicula')
			return
		}
		if (buscar.match(/^\d+$/)) {
			setError('No se  realizar busqueda con numeros')
			return
		}
		if (buscar.length < 3) {
			setError('Ingrese al menos 3 caracteres')
			return
		}
		setError(null)
	}, [buscar])

	return { buscar, actualizarBuscar, error }
}

function App() {
	const [orden, setOrden] = useState(false)

	const { buscar, actualizarBuscar, error } = buscarP()
	const { peliculas, cargando, getPelicula } = UsarPeluculas({ buscar, orden })

	const debounceGetPelicula = useCallback(
		debounce(buscar => {
			console.log('buscando', buscar)
			getPelicula({ buscar })
		}, 300),
		[],
	)

	const handleSubmit = event => {
		event.preventDefault()
		getPelicula({ buscar })
	}
	const handleSort = () => {
		setOrden(!orden)
	}
	const handleChenge = event => {
		const newbuscar = event.target.value
		actualizarBuscar(newbuscar)
		debounceGetPelicula(newbuscar)
	}

	return (
		<div className='page'>
			<h1>BUSCAR PELICULAS</h1>
			<header>
				<form className='form' onSubmit={handleSubmit}>
					<input
						onChange={handleChenge}
						value={buscar}
						name='query'
						type='text'
						placeholder='Ingresa nombre de la pelicula'
					/>
					<input type='checkbox' onChange={handleSort} checked={orden} />
					<button type='submit'>Buscar</button>
				</form>
				{error && <p style={{ color: 'red' }}>{error}</p>}
			</header>
			<main>
				{cargando ? (
					<p>Cargando...</p>
				) : (
					<Peliculas peliculas={peliculas}></Peliculas>
				)}
			</main>
		</div>
	)
}

export default App
