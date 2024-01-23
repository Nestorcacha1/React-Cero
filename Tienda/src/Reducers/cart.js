export const initialState = []

export const CART_ACTION_TYPE = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
}
export const cartreducer = (state, action) => {
    const { payload: acctionPayload, type: actionType } = action
    switch (actionType) {
        case CART_ACTION_TYPE.ADD_TO_CART: {
            const { id } = acctionPayload
            const productInCart = state.findIndex(item => item.id === id)
            if (productInCart >= 0) {
                // Si el producto existe en el carrito, actualizar cantidad con structuredClone
                const newState = structuredClone(state)
                newState[productInCart].quantity += 1
                return newState

            }
            return [
                ...state,
                {
                    ...acctionPayload,
                    quantity: 1,
                },
            ]
        }
        case CART_ACTION_TYPE.REMOVE_FROM_CART: {
            const { id } = acctionPayload
            return state.filter(item => item.id !== id)
        }
        case CART_ACTION_TYPE.CLEAR_CART: {
            return initialState
        }
    }
    return state
}