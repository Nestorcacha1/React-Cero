import './App.css'
import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enableMouse, setEnableMouse] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('Montado', { enableMouse })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enableMouse) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      // cuando el efecto se desmonta -> cuando se cambian las dependencias
      console.log('Limpiado')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enableMouse])
  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'purple',
          borderRadius: '50%',
          apoacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <h1>HOLA</h1>
      <button onClick={() => setEnableMouse(!enableMouse)}>
        {enableMouse ? 'Desactivar' : 'activar'} Seguir puntero
      </button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
