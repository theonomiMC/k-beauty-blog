import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from "../context";
import { k_products } from "../data";

const SingleProduct = () => {
    const { id } = useParams()
    const { addToWishlist } = useContext(AppContext)
    const [selectedItem, setSelectedItem] = React.useState("tab1")
    const item = k_products.find(el => el.id === Number(id)) || false
    const { skin_type, image, info, ingredients, name, price } = item
    if (item === false) {
        return <section>
        <div className='no-result'>
            <h2 className='section-title'>product not found</h2>
        </div>
            
        </section>
    }
    const handelChange = e => {
        e.preventDefault()
        setSelectedItem(e.target.value)
    }
    return <section style={{ textAlign: 'center' }}>
        <div className='single-product' aria-label="Product Description">
            <div className="single-product-img">
                <img src={image} alt={name} />
            </div>
            <div className='single-item-info'>
                <h1 className='section-title'>{name}</h1>
                <h4>$ {price}</h4>
                <button
                    onClick={() => addToWishlist(item)}
                    className='btn-yellow'>
                    add to wishlist
                </button>
                <label htmlFor="details">
                    <input type='radio'
                        value="tab1"
                        id="details"
                        checked={selectedItem === "tab1"}
                        onChange={handelChange}
                    />
                    <span 
                    className={`${selectedItem === "tab1" ? "active-tab" : "inactive"}`}>
                    details
                    </span>
                </label>
                <label htmlFor="ingredients">
                    <input type='radio'
                        id='ingredients'
                        value="tab2"
                        checked={selectedItem === "tab2"}
                        onChange={handelChange}
                    />
                    <span 
                    className={`${selectedItem === "tab2" ? "active-tab" : "inactive"}`}>
                    ingredients
                    </span>
                </label>
                {selectedItem === 'tab1' ? (
                    <p>
                        {info}
                    </p>
                ) : (
                    <p>
                        <span>ingredients: </span>{ingredients}
                    </p>
                )}



                <p>
                    <span>recomended skin type: </span>{skin_type}
                </p>
            </div>

        </div>
    </section >
}
export default SingleProduct
