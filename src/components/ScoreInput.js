import React from 'react';
import PropTypes from 'prop-types';

const ScoreInput = (props) => {
  const handleClick = () => {};
  return (
    <div clasName='score-pad'>
      <table className='input-table'>
        <tbody>
          <tr>
            <td className='input-cell' value={1}>
              1
            </td>
            <td className='input-cell' value={2}>
              2
            </td>
            <td className='input-cell' value={3}>
              3
            </td>
          </tr>
          <tr>
            <td className='input-cell' value={4}>
              4
            </td>
            <td className='input-cell' value={5}>
              5
            </td>
            <td className='input-cell' value={6}>
              6
            </td>
          </tr>
          <tr>
            <td className='input-cell' value={7}>
              7
            </td>
            <td className='input-cell' value={8}>
              8
            </td>
            <td className='input-cell' value={9}>
              9
            </td>
          </tr>
          <tr>
            <td style={{ width: 0 }}></td>
            <td className='input-cell' value={10}>
              10
            </td>
            <td style={{ width: 0 }}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ScoreInput.propTypes = {};

export default ScoreInput;
