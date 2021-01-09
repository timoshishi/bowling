import React from 'react';
import PropTypes from 'prop-types';

const Frame = (props) => {
  return (
    <div className='score-cell'>
      <div className='header score-header'>Frame: 1</div>
      <div className='roll-boxes'>
        <div className='roll'></div>
        <div className='roll'></div>
      </div>
    </div>
  );
};

Frame.propTypes = {};

export default Frame;
