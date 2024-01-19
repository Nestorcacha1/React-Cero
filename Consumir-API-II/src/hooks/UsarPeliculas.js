import { buscarPelicula } from '../services/Peliculas'
import { useRef, useState, useMemo, useCallback } from 'react'
export function UsarPeluculas({ buscar, orden }) {
    const [peliculas, setPelicula] = useState([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)
    const busquedaAnterior = useRef({ buscar })

    const getPelicula = useCallback(async ({ buscar }) => {
        if (buscar === busquedaAnterior.current) return
        try {
            setCargando(true)
            setError(null)
            busquedaAnterior.current = buscar
            const newPelicula = await buscarPelicula({ buscar })
            setPelicula(newPelicula)
        } catch (error) {
            setError(error.messsage)

        } finally {
            setCargando(false)

        }
    }, [])
    const ordenPelicula = useMemo(() => {

        return orden ? [...peliculas].sort((a, b) => a.title.localeCompare(b.title)) : peliculas
    }, [orden, peliculas])
    return { peliculas: ordenPelicula, getPelicula, cargando }
}
