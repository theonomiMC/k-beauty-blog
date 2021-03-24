import React from 'react'

const About = () => {
    return <div className="about-section" >
        <h1 id='about'>I am Natalia</h1>
        <h3>web developer</h3>
         <div className="about-top-img">
        <a href="https://www.linkedin.com/in/nataliabakakuri/" target="_blank" rel="noreferrer external">
           <img src="in2.jpg" alt="linkedin" />
        </a>
        </div>
        <div className='about-item'>
            <p>this project is about korean skincare routine.
            Review some recommended korean cosmetics according to
            skin type. Take a small test to know your skin type. Go
            to the products section, take a glance at each item and add them to your wishlist.
        </p>
        </div>
        <img src="/images/leaves.png" alt='about-img' style={{ width: '100px' }} />

    </div>
}

export default About