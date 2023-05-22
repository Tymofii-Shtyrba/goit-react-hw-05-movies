import React from 'react';
import { Link } from 'react-router-dom';
import { StyledTrandingList } from './TrandignList.styled';
import PropTypes from 'prop-types';

export default function TrandingList({ movies, location }) {
  return (
    <StyledTrandingList>
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
    </StyledTrandingList>
  );
}

TrandingList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
};
