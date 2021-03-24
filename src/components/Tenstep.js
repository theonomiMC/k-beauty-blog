import React from 'react'
import { list, onlineShopLinks } from "../data";

const Tenstep = () => {
    return <section>
        <article className="tenstep">
            <h3 className='main title'>კანის მოვლის 10 საფეხური</h3>
            <h4 className='sub title'>კორეული მეთოდი,
        რომელმაც შეცვალა სილამაზის ინდუსტრია</h4>
        <div style={{marginBottom:'50px', marginTop:"50px"}}>
            <img src="/images/skincare.jpg" alt="headerimage"/>
        </div>
        
            <p>ყველა, ვინც სამხრეთ კორეაში ერთხელ მაინც იყო ან მის კულტურასთან შეხება ჰქონია,
            აღნიშნავს რომ, აზიელებს კანის ახალგაზრდობის შენარჩუნების უნიკალური თვისება აქვთ.
            გენეტიკა უკანასკნელ როლს არ თამაშობს, მაგრამ პირველ ადგილას ყოველდღიური მოვლაა.
            კორეელები კანის მოვლის სხვადასხვა სისტემით არიან ცნობილი,
            მაგრამ ყველაზე უფრო პოპულარულია 10-საფეხურიანი მეთოდი.
        </p>
      <p>&nbsp;</p>
            <ul className='skincare-lists'>
                {list.map(item => <li key={item.id}>
                <h4>საფეხური {item.id}: {item.name}</h4>
                
                <p>{item.content}</p>
                </li>)}
            </ul>
        </article>

        <ul className="card-wrapper list-links">
        {onlineShopLinks.map((el,i)=>(
             <li className='card shoplinks' key={i}>
             <a href={el.link} target="_blank" rel="external noreferrer">
                    <img src={el.image} alt={el.name} />
                </a>
             </li>
        ))}
        </ul>
    </section >
}

export default Tenstep