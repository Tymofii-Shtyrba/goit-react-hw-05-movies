import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from 'services/moviesAPI';
import { StyledReviewsList, StyledReviewsWrapper } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await moviesAPI.movieReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {}
    };
    getData();
  }, [movieId]);
  return (
    <StyledReviewsWrapper>
      {reviews.length > 0 ? (
        <StyledReviewsList>
          {reviews.map(revie => (
            <li>
              <p>
                <b>Author: </b>
                {revie.author}
              </p>
              <p>{revie.content}</p>
            </li>
          ))}
        </StyledReviewsList>
      ) : (
        <p>There's no reviews</p>
      )}
    </StyledReviewsWrapper>
  );
}
