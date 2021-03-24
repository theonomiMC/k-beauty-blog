import React, { useState } from 'react'
import { test_data} from "../data";

const SkinTest = () => {
  
    const [skin, setSkin] = useState()
    const [showResult, setShowresult] = useState(false)
    const [index, setIndex] = useState(0)
    
    //----button event handler
    const handleAnswers = (e, result) => {
        e.preventDefault()
        if (index < test_data.length && (typeof result === 'number' || !result)) {
            result === 2 ? setIndex(3) : setIndex(index + 1)
        }
        if (typeof result === 'string') {
            setShowresult(true)
            setSkin(result)
        }
    }
    //--render option----
    if (showResult) {
        return <article>
            <div className='test-box'>
                <h4>your skin type is {skin}</h4>
            </div>
            
        </article>
    }

    return (
        <article>
            <h3 id="skincare-test">take this test to know your skin type.</h3>
            <div className='test-box'>
                <div className='test-header'>
                    <h4>{test_data[index].question}</h4>
                </div>
                {test_data[index].answers.map((item, i) => (
                    <div key={i} className='btns'>
                        <button type="click"
                            onClick={(e) => handleAnswers(e, item.result)}
                            className='btn-white'>
                            {item.ans}
                        </button>

                    </div>)
                )}

            </div>
        </article>
    )
}


export default SkinTest