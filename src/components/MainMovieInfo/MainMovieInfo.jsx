import StyledNoImage from 'components/NoImage/NoImage.styled';
import React from 'react';

export default function MainMovieInfo({ movieInform }) {
  const { genres, title, poster_path, vote_average } = movieInform;
  return (
    <section>
      <h1>{title}</h1>
      {poster_path ? (
        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
      ) : (
        <StyledNoImage width={300} title="No Poster" />
      )}
      <p>{vote_average}</p>
      {genres && genres.map(({ name }) => <p>{name}</p>)}
    </section>
  );
}
