import css from './MovieReviews.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../movie-api';
import { Review } from '../../types';

const MovieReviews = () => {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async (id: string) => {
      const response: Review[] = await getMovieReviews(id);
      setReviews(response);
    }

    if (movieId) {
      getReviews(movieId);
    }
  }, [movieId])

  if (!reviews) {
    return <div>Loadding...</div>
  }

  return (
    <>
      {reviews.length === 0
        ? <p>We don't have any reviews for this movie</p>
        : <ul className={css.reviewList}>
          {reviews.map(review => {
            const { author, content, id } = review;
            return (
              <li className={css.reviewItem} key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            )
          })}
        </ul>
      }
    </>
  )
}

export default MovieReviews;