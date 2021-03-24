import React, { useContext } from "react";
import { AppContext } from "../context";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
    const { wishlist } = useContext(AppContext)
    if (wishlist.length < 1) {
        return <section>
        <div className="no-result">
            <h3 className='section-title'>
                your wishlist is currently empty
            </h3>
        </div>
            
        </section>
    }
    //---GET TOTAL ------ 
    const getTotal = wishlist.map(item => item.qty * item.price).reduce((prev, total) => {
        return prev + total
    }).toFixed(2)

    return <section>

    <article style={{overflow: 'hidden',fontFamily:"IBM Plex Serif"}}>
    <h2 id="wishlist" className='centered'>Your Wishlist</h2>
        {wishlist.map((item) => <WishlistItem item={item} key={item.id} />)}
        <hr style={{ margin: '2rem auto 0 auto', width:'580px' }} />
        <h3 style={{marginBottom:'5rem'}}>subtotal: {getTotal} $</h3>
    </article>
    </section>
}
export default Wishlist