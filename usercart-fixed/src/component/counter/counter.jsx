import React, { useState } from 'react'
import './counter.css'

export default function counter() {

    const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="add-discard">
        <p className='Plus-Minus' onClick={decrementCounter}>-</p>
        <p className='numb'>{counter}</p>
        <p className='Plus-Minus' onClick={incrementCounter}>+</p>
    </div>
  )
}
