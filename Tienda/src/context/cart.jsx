import { createContext, useReducer } from 'react'
import { cartreducer, initialState } from '../Reducers/cart'
// crear contexto
export const CartContext = createContext()

function userCartReduce() {
	const [state, dispatch] = useReducer(cartreducer, initialState)
	const addToCart = product => {
		dispatch({
			type: 'ADD_TO_CART',
			payload: product,
		})
	}
	const removeFromCart = product => {
		dispatch({
			type: 'REMOVE_FROM_CART',
			payload: product,
		})
	}
	const clearCart = () => {
		dispatch({
			type: 'CLEAR_CART',
		})
	}
	return { state, addToCart, removeFromCart, clearCart }
}
// crear provider
export function CartProvider({ children }) {
	const { state, addToCart, removeFromCart, clearCart } = userCartReduce()
	return (
		<CartContext.Provider
			value={{ cart: state, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	)
}
