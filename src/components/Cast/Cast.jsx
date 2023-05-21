import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from 'services/moviesAPI';
import StyledNoImage from 'components/NoImage/NoImage.styled';
import { ColorRing } from 'react-loader-spinner';

export default function Cast() {
  const [listOfActors, setListOfActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await moviesAPI.credits(movieId);
        console.log(response);
        setListOfActors(response.data.cast);
        setIsLoading(false);
      } catch (error) {}
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {listOfActors.length > 0 && (
        <ul>
          {listOfActors.map(({ character, original_name, profile_path }) => (
            <li>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={original_name}
                />
              ) : (
                <StyledNoImage width={200} title="No Photo" />
              )}
              <p>{character}</p>
              <p>{original_name}</p>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <ColorRing />}
    </div>
  );
}
