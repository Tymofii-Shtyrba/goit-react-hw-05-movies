import React from 'react';

export default function Home({ movies }) {
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ original_title, id }) => {
          return <li>{[original_title, id]}</li>;
        })}
      </ul>
    </div>
  );
}
