const appReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                wishlist: [action.payload, ...state.wishlist],
            }
        case 'REMOVE':
            return {
                ...state,
                wishlist: state.wishlist.filter(item => item.id !== action.payload)
            }
        case 'INCREASE':
            let increasedArray = state.wishlist.map(item => {
                if (item.id === action.payload) {
                    return { ...item, qty: item.qty + 1 }
                }
                return item
            })
            return {
                ...state,
                wishlist: increasedArray
            }
        case 'DECREASE':
            let decreasedArray = state.wishlist.map(item => {
                if (item.id === action.payload) {
                    return { ...item, qty: item.qty - 1 }
                }
                return item
            }).filter(item => item.qty !== 0)
            return { ...state, wishlist: decreasedArray }
        case 'TOTAL':
            return { ...state, total:0}
        default:
            return state
    }

}
export default appReducer