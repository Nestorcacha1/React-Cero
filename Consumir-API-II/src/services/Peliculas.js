let API_KEY = '968fb585'
export const buscarPelicula = async ({ buscar }) => {
    if (buscar === '') return null

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${buscar}`)
        //http://www.omdbapi.com/?apikey=968fb585&s=Avengers
        const json = await response.json()

        const peliculas = json.Search
        return peliculas?.map(peli => ({
            id: peli.imdbID,
            title: peli.Title,
            year: peli.Year,
            poster: peli.Poster,
        }))
    } catch (e) {
        throw new Error('No se encontraron resultados')
    }

}


