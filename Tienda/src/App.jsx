import { products as initialProducts } from './Mooks/Products.json'
import './App.css'
import { Productos } from './Components/Productos'
//import { useState } from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { is_DEVELOPMENT } from './config'
import { useFilters } from './Hooks/useFilters.js'
import { Cart } from './Components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App() {
	//const [products] = useState(initialProducts)
	const { filterProducts } = useFilters()
	const filteredProducts = filterProducts(initialProducts)
	return (
		<CartProvider>
			<Header />
			<Cart />
			<Productos productos={filteredProducts} />
			{is_DEVELOPMENT && <Footer></Footer>}
		</CartProvider>
	)
}

export default App
