import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NameBox = ({ name, setName }) => {
  console.log(name);
  const [inputVal, setInputVal] = useState('');
  return (
    <div className='name-box'>
      <div className='name'>
        <div className='header'>Name</div>
      </div>
      {!name.length ? (
        <>
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className='name-input'
          />
          <button onClick={() => inputVal.length && setName(inputVal)}>
            Submit
          </button>
        </>
      ) : (
        <p>{name}</p>
      )}
    </div>
  );
};

NameBox.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

export default NameBox;
