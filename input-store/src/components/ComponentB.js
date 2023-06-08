import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addText } from '../redux/InputSlice';

export default function ComponentB() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addText(value));
    setValue(''); // Clearing the input value
  };

  return (
    <div>
      <h1>Component B</h1>
      <div className="input-group mb-3 mx-10">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message"
          aria-label="message"
          aria-describedby="button-addon2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <button
            className="btn btn-outline-primary"
            type="button"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
