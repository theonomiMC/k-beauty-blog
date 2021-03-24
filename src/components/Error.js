import React from 'react'
import { Link} from 'react-router-dom'

const Error = () => {
    return <section style={{height:'50vh', textAlign:'center'}}>
        <h1 style={{margin:'4rem 0'}}>Page not found</h1>
        <div>
        
        <Link to='/' className='btn'>
       go back
        </Link>
     
        </div>
    </section>
}

export default Error