import React from 'react';
import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const deleteRowContent = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };

  return (
    <React.Fragment>
      <div className='container'>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button
                type='button'
                className='btn'
                onClick={() => deleteRowContent(id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <button className='btn' type='button' onClick={() => setPeople([])}>
        Clear
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
