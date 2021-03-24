import React from 'react'
import About from "./About";
import Shoplinks from './Shoplinks';
import SkinTest from './SkinTest'
import { Link } from 'react-router-dom'


// const img1_url = "https://thesocialgrabber.com/wp-content/uploads/2020/09/2317487.jpg"
const Home = () => {
    return <section >
        <div className="img-container">
            <div className="txt-right">
                <h3>კანის მოვლის 10-საფეხურინი კორეული მეთოდი </h3>
                <p>კორეელები კანის მოვლის სხვადასხვა სისტემით არიან ცნობილი,
                მაგრამ ყველაზე უფრო პოპულარულია 10-საფეხურიანი მეთოდია.</p>
                <Link to="/10-step-skincare" className='read-btn'>გაიგეთ მეტი
                <i className="fa fa-long-arrow-right arrow1" aria-hidden="true" />
                </Link>
            </div>
        </div>
        {/* <p>წყარო: 
       <a href="https://1tv.ge/news/sakhis-kanis-movla-zafkhulshi-koreelebis-10-etapiani-rutina/">1tv</a>   
        </p> */}

        <SkinTest />
        <Shoplinks />
        <About />
    </section>
}

export default Home