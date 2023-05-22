import StyledNoImage from 'components/NoImage/NoImage.styled';
import React from 'react';
import StyledMovieInfo from './MainMovieInfo.styled';
import PropTypes from 'prop-types';

export default function MainMovieInfo({ movieInform }) {
  const { genres, title, poster_path, vote_average } = movieInform;
  return (
    <StyledMovieInfo>
      {poster_path ? (
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
      ) : (
        <StyledNoImage width={300} title="No Poster" />
      )}
      <div>
        <h1>{title}</h1>
        <p>
          <b>Average vote: </b>
          {vote_average}
        </p>
        <div>
          <b>Genres: </b>
          {genres && genres.map(({ name }) => <p>{name}</p>)}
        </div>
      </div>
    </StyledMovieInfo>
  );
}

MainMovieInfo.propTypes = {
  movieInform: PropTypes.object.isRequired,
};
