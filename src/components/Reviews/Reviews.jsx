import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from 'services/moviesAPI';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await moviesAPI.movieReviews(movieId);
        console.log(response);
        setReviews(response.data.results);
      } catch (error) {}
    };
    getData();
  });
  return (
    <div>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(revie => (
            <li>
              <p>{revie.author}</p>
              <p>{revie.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
