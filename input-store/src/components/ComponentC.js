import React from 'react';
import { useSelector } from 'react-redux';

export default function ComponentC() {
  
  const text = useSelector((state)=> state.input.textValue);
  return (
    <div>
        <h1>Component C</h1>
        <div>
            <h5> {text.length===0 ? "You will see input value here." : text}</h5>
        </div>
    </div>
  )
}
