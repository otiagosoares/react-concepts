/* eslint-disable react/prop-types */
import React from 'react';
import P from 'prop-types';

import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button disabled={disabled} onClick={onClick} className="button">
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.protoTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
