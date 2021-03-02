import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Tushar',
    job: 'Engineer',
    dept: 'SE',
    title: 'Manager',
  });

  const updateMessage = () => {
    // setPerson({ ...person, title: 'Vice President' });
    setPerson((prevState) => {
      return { ...person, title: 'Vice President' };
    });
  };

  return (
    <React.Fragment>
      <div className='container'>
        <h2>{person.name}</h2>
        <h3>{person.job}</h3>
        <h3>{person.dept}</h3>
        <h3>{person.title}</h3>
      </div>
      <button type='button' className='btn' onClick={() => updateMessage()}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
