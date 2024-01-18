import './App.css'
import { UsarPeluculas } from './hooks/UsarPeliculas'
import { Peliculas } from './components/Peliculas'
import { useEffect, useState, useRef } from 'react'

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
	const { peliculas } = UsarPeluculas()
	const { buscar, actualizarBuscar, error } = buscarP()

	const handleSubmit = event => {
		event.preventDefault()
		console.log({ buscar })
	}

	const handleChenge = event => {
		actualizarBuscar(event.target.value)
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
					<button type='submit'>Buscar</button>
				</form>
				{error && <p style={{ color: 'red' }}>{error}</p>}
			</header>
			<main>
				<Peliculas peliculas={peliculas}></Peliculas>
			</main>
		</div>
	)
}

export default App
