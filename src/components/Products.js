import React, { useCallback, useState } from 'react'

import Product from "./Product";
import { k_products } from "../data";


const Products = () => {
    const selectValue = React.useRef('')
    const [products, setProducts] = useState(k_products)
    const [searchTerm, setSearchTerm] = useState('')
    const searchValue = React.useRef('')
    const [skin, setSkin] = useState('')
    const [productType, setProductType] = useState('')

    const filterByProductType = products.filter(p => p.type === productType)
    const filterBySkinType = products.filter(p => p.skin_type === skin || p.skin_type ==="All skin types")
    const handleSubmit = (e) => {
        e.prefentDefault()
        e.target.reset();
    }
    const searchProduct = () => {
        setSearchTerm(searchValue.current.value)
    }
    const selectSkinType = (e) => {
        setSkin(e.target.value)
    }
    const selectProductType = (e) => {
        setProductType(e.target.value)
    }
    const clearFilter = useCallback(() => {
        setSkin('')
        setSearchTerm('')
        setProductType('')
    }, [])
    const updatedList = () => {
        if (productType) {
            if (skin) {
                return filterByProductType.filter(p => p.skin_type === skin || p.skin_type ==="All skin types")
            } else {
                return filterByProductType
            }
        } else if (skin) {
            return filterBySkinType
        } else { return products }
    }
    const newList = updatedList()
    const typeList = [...new Set(products.map(i => i.type))]
    const skinTypeList = [...new Set(products.map(i => i.skin_type))]
    //---set FILTER----
    let lastList = searchTerm ? newList.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) : newList

    return <section>
        <div className='search' role="search">
            <form onSubmit={handleSubmit}>

                <div className='form-control'>
                    <label htmlFor='name'>product</label>
                    <select id='type' onChange={selectProductType}>
                        <option value='all'>select filter</option>
                        {typeList.map((item, i) => (
                            <option value={item} key={i}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>skin type</label>
                    <select id='skin' onChange={selectSkinType} ref={selectValue}>
                        <option value='all'>select filter</option>
                        {skinTypeList.map((item, i) => (
                            <option key={i} value={item}>{item}</option>

                        ))}
                    </select>
                    </div>

                    <div className='form-control'>
                    <label htmlFor='name'>Search product</label>
                    <input
                        type='text'
                        ref={searchValue}
                        placeholder='enter name...'
                        onChange={searchProduct} />
                </div>
                <button type='reset' onClick={() => clearFilter()}
                    className='form-btn' >
                    clear filter
                    </button>
            </form>
            
        </div>
        <div style={{marginLeft:'3.5rem'}}>
        {lastList.length < products.length ? lastList.length + ' RESULTS' : null}
        </div>
        <h1 className='section-title'>best sellers</h1>
        <ul className='card-wrapper'>
            {lastList.map(p => <li className='card' key={p.id}><Product product={p} /></li>)}
        </ul>

    </section>
}

export default Products
