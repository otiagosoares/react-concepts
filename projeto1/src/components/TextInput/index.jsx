/* eslint-disable react/prop-types */
import React from 'react';
import P from 'prop-types';
import './styles.css';

const TextInput = ({ searchValue, handleChange }) => {
  return (
    <>
      <input
        type="search"
        className="text-input"
        value={searchValue}
        onChange={handleChange}
        placeholder="Type your search"
      />
    </>
  );
};

export default TextInput;

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
