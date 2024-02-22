import React,{useState} from 'react'

const Count = () => {

    const [count, setCount]= useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(0)
    }


  return (
    <>
        <div className='counter' onClick={increment}>
            <h3>وَاذْكُرْ رَبَّكَ كَثِيرًا</h3>
        <h1>{count}</h1>
        {/* <button onClick={decrement}> Decrement</button> */}
        {/* <button onClick={reset}>  اعادة ضبط</button>
        <button onClick={increment}> استغفر الله</button> */}
        </div>
        <button onClick={reset}>  اعادة ضبط</button>
    </>
    
  )
}

export default Count