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
    <div className='counter'>
      <h1>{count}</h1>
      {/* <button onClick={decrement}> Decrement</button> */}
      <button onClick={reset}>  اعادة ضبط</button>
      <button onClick={increment}> استغفر الله</button>
    </div>
  )
}

export default Count