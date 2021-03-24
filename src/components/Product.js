import React, { useContext } from 'react'
import { AppContext } from "../context";
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    const { name, image, id, info, price } = product
    const { addToWishlist, wishlist } = useContext(AppContext)

    const wishedProduct = wishlist.find(item => item.id === id)
    const disableBtn = wishedProduct ? true : false

    return <article className='tooltip'>
        <div className='tooltiptext'>
            <Link to={`/product/${id}`} className='product-link'>
                <h4>{name}</h4>
                
            </Link>
            <p>{info.substr(0, 100)} ...</p>
            <div className='tooltip-btn'>
                <button disabled={disableBtn}
                    onClick={() => addToWishlist(product)}
                    className='btn-yellow'>
                    add to wishlist
            </button>
            </div>
        </div>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>$ {price}</p>
       
    </article>
}
export default Product


