import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ onSearch }) {
  return (
    <form onSubmit={onSearch}>
      <label>
        <input name="query" type="text" />
      </label>
      <button type="submit">search</button>
    </form>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
