import React from 'react';
import { Link } from 'react-router-dom';

export default function TrandingList({ movies, location }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location.pathname }}
            >
              {movie.hasOwnProperty('title') ? movie.title : movie.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
