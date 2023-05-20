import React from 'react';
import { Link } from 'react-router-dom';

export default function TrandingList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.hasOwnProperty('title') ? movie.title : movie.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
