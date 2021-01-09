import React from 'react';
import PropTypes from 'prop-types';

const FrameTenth = (props) => {
  return (
    <div className='score-cell'>
      <div className='header score-header'>Frame: 10</div>
      <div className='roll-final-box'>
        <div className='roll-final'></div>
        <div className='roll-final'></div>
        <div className='roll-final'></div>
      </div>
    </div>
  );
};

FrameTenth.propTypes = {};

export default FrameTenth;
