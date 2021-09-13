import PropTypes from 'prop-types';
import React from 'react';
import Box from '../Box';
import './BoxList.scss';

BoxList.propTypes = {
  boxList: PropTypes.array,
  onBoxClick: PropTypes.func,
};

BoxList.defaultProps = {
  boxList: [],
  onBoxClick: null,
};

function BoxList({ boxList, onBoxClick }) {
  return (
    <ul className="box-list">
      {boxList.map((box, idx) => (
        <li key={box.luckyNumber}>
          <Box box={box} onClick={(box) => onBoxClick && onBoxClick(box, idx)}>
            BOX {box.luckyNumber}
          </Box>
        </li>
      ))}
    </ul>
  );
}

export default BoxList;
