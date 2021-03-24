import React, { useContext } from "react";
import { AppContext } from "../context";

const WishlistItem = ({ item }) => {
    const { incQty, decQty, removeFromWishlist } = useContext(AppContext)
    return <>
        <div className='row'>
            <div className='image'>
                <img src={item.image} alt={item.name} />
            </div>
            <div className='row-content'>
                <p><strong>{item.name}</strong></p>
                <p> product: {item.type}</p>
                <p> skin type: {item.skin_type}</p>
            </div>
       
            <div className='price'>
                <p>$ {item.price}</p>
            </div>
            <div className='row-buttons'>
                <button className='btn-gray' type='button'
                    onClick={() => decQty(item.id)}>-
                </button>
                <span style={{padding:'0 5px'}}>{item.qty}</span>
                <button className='btn-gray' type='button'
                    onClick={() => incQty(item.id)}>+
                </button>
            </div>
            <div>
                <button 
                className='btn-red' 
                type='button'
                onClick={()=>removeFromWishlist(item.id)}>remove</button>
            </div>

        </div>
    </>
}
export default WishlistItem