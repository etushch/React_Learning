import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const resetValue = () => {
    setValue((prevState) => {
      return 0;
    });
  };

  return (
    <React.Fragment>
      <section style={{ margin: '4rem 0' }}>
        <h1>{value}</h1>
        <h2>Regular Counter</h2>
        <button
          className='btn'
          type='submit'
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Increase
        </button>
        <button
          className='btn'
          type='submit'
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button className='btn' type='submit' onClick={() => resetValue()}>
          Reset
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h1>{value}</h1>
        <h2>Advance Counter</h2>
        <button
          className='btn'
          type='submit'
          onClick={() => {
            setTimeout(() => {
              setValue((prevState) => {
                return prevState + 1;
              });
            }, 2000);
          }}
        >
          Increase Later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
