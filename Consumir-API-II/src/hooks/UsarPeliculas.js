import resultados from '../Api/resultados-api.json'
import noencontrado from '../Api/noencontrado.json'
export function UsarPeluculas() {
    const peliculas = resultados.Search
    const mapeoPelicula = peliculas?.map(peli => ({
        id: peli.imdbID,
        title: peli.Title,
        year: peli.Year,
        poster: peli.Poster,
    }))
    return { peliculas: mapeoPelicula }
}
