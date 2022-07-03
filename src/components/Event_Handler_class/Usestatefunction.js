import React, { useState } from 'react'

function Usestatefunction() {
    const [count, setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(count+1);
    }
  return (
    <div>
      <h1>Xcount:{count}</h1>
      <button onClick={handleIncrement}>incerementbtn</button>
    </div>
  )
}

export default Usestatefunction
