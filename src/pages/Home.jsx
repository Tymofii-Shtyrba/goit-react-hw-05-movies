import React, { useEffect, useState } from 'react';
import moviesAPI from 'services/moviesAPI';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length !== 0) return;
    console.log(movies);
    const foo = async () => {
      const respons = await moviesAPI();
      setMovies(respons.data.results);
    };
    foo();
  });

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
