import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Frame from './Frame.jsx';
import FrameTenth from './FrameTenth.js';
import Total from './Total';
import NameBox from './NameBox.js';
import ScoreInput from './ScoreInput.js';
const Scorecard = (props) => {
  const [name, setName] = useState('');
  return (
    <>
      <div className='container'>
        <div className='scorecard'>
          <NameBox name={name} setName={setName} />
          <Frame />
          <FrameTenth />
          <Total />
        </div>
      </div>
      <div className='score-input'>
        <ScoreInput />
      </div>
    </>
  );
};

Scorecard.propTypes = {};

export default Scorecard;
