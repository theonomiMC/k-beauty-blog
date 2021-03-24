import React from 'react'

const Shoplinks = () => {
    return <article>
        <ul className='card-wrapper' style={{ fontFamily: "ALK Sanet sans-serif" }}>
            <li className='card shoplinks'>
                <img src="/images/psp.jpg" alt="psp" />
                {/* <h4>
                    კორეული პროდუქცია პე-ეს-პეში
                    </h4> */}
                <h4>
                    <a href="https://psp.ge/brand/missha.html" target="_blank" rel="external noreferrer">
                        Missha •</a>
                    <a href="https://psp.ge/brand/mizon.html" target="_blank" rel="external noreferrer">
                        Mizon</a>
                </h4>
            </li>
            <li className='card shoplinks'>
                <img src='/images/aversi.png' alt="aversi" />
                {/* <h4>
                    კორეული პროდუქცია ავერსში
                    </h4> */}
                <h4>
                    <a href="https://www.aversi.ge/ka/products/list/171/Daymellow?fbclid=IwAR1Mn3J7bXhwTIKwZgXshrUIpSKLBPj9HvVO_9nquwnsA6tzueJuMWUtaKM" target="_blank" rel="external noreferrer">
                        Daymellow •</a>
                    <a href="https://www.aversi.ge/ka/products/list/176/Accoje?&page=2" target="_blank" rel="external noreferrer">
                        Accoje</a>
                </h4>
            </li>
            <li className='card shoplinks'>
                <img src="/images/kikino.jpg" alt="kikino" />
                <h4>
                    <a href="https://www.facebook.com/kikino.cosmetics" target="_blank" rel="external noreferrer">
                        კიკინო • K-ikino
                    </a>
                </h4>
               
            </li>
        </ul>
    </article >
}
export default Shoplinks