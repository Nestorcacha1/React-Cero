function ListaPeliculas({ peliculas }) {
	return (
		<ul className='pelicula'>
			{peliculas.map(peli => (
				<li className='pelicula' key={peli.id}>
					<h3>{peli.title}</h3>
					<p>{peli.year}</p>
					<img src={peli.poster} alt={peli.title} />
				</li>
			))}
		</ul>
	)
}

function ListNoEncontrado() {
	return <p>No se encontraron Resultados</p>
}

export function Peliculas({ peliculas }) {
	const pelicula_E = peliculas?.length > 0

	return pelicula_E ? (
		<ListaPeliculas peliculas={peliculas}></ListaPeliculas>
	) : (
		<ListNoEncontrado></ListNoEncontrado>
	)
}
