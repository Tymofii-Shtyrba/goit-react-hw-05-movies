import React from 'react';

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
