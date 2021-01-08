import React from 'react';
import PropTypes from 'prop-types';

const Scorecard = (props) => {
  return (
    <div className='container'>
      <div className='scorecard'>
        <div className='name-box'>
          <div className='name'>
            <div className='header'>Name</div>
          </div>
        </div>
        <div className='score-cell'>
          <div className='header score-header'>Frame: 1</div>
          <div className='roll-boxes'>
            <div className='roll'></div>
            <div className='roll'></div>
          </div>
        </div>
        <div className='score-cell'>
          <div className='header score-header'>Frame: 10</div>
          <div className='roll-final-box'>
            <div className='roll-final'></div>
            <div className='roll-final'></div>
            <div className='roll-final'></div>
          </div>
        </div>
        <div className='name-box'>
          <div className='name'>
            <div className='header'>Total</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Scorecard.propTypes = {};

export default Scorecard;
