import React, { useReducer, useEffect } from 'react'
// import data from './data'
import appReducer from './appReducer'

const initialState={
    wishlist:localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) :[],
    total:0,
}
const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(appReducer, initialState)
    const addToWishlist=(item)=>{
        dispatch({type:'ADD', payload:item})
    }
    const removeFromWishlist=(id)=>{
        dispatch({type:'REMOVE', payload:id})
    }
    const incQty=(id)=>{
        dispatch({type:'INCREASE',payload:id})
    }
    const decQty=(id)=>{
        dispatch({type:'DECREASE', payload:id})
    }
    const getTotal=()=>{
        dispatch({type:'TOTAL'})
    }
    useEffect(()=>{
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    },[state])
    return <AppContext.Provider value={{
        wishlist:state.wishlist,
        addToWishlist,
        removeFromWishlist,
        incQty,
        decQty,
        getTotal,
        total:state.total
    }}>
        {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider}