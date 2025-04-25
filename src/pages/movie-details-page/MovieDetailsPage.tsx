import { useEffect, useState } from "react";
import { getMovieDetails } from "../../movie-api";
import { MovieDetails } from "../../types";
import { useParams, NavLink, useLocation, Link } from "react-router-dom";
import css from './MovieDetailsPage.module.css';
import MovieCast from "../../components/movie-cast/MovieCast";
import MovieReviews from "../../components/movie-reviews/MovieReviews";
import { IoIosArrowRoundBack } from "react-icons/io";

const MovieDetailsPage = () => {
  const [movieDetail, setMovieDetail] = useState<MovieDetails | null>(null);
  const [informationType, setInformationType] = useState("");
  const { movieId } = useParams();
  const location = useLocation();
  const backHref = location.state ?? '/';

  useEffect(() => {
    const getMovies = async (id: string) => {
      const result: MovieDetails = await getMovieDetails(id);
      setMovieDetail(result);
    }

    if (movieId) {
      getMovies(movieId);
    }
  }, [movieId])

  if (!movieDetail) {
    return <div>Loadding...</div>
  }

  const { poster_path, title, release_date, vote_average, overview, genres } = movieDetail;

  const posterUrl = 'https://image.tmdb.org/t/p/original' + poster_path;
  const yearRelease = release_date && release_date.split('-')[0];
  const filmGenres = genres && genres.map(genre => genre.name).join(" ");
  const userScore = vote_average && (vote_average * 10).toFixed(2);

  const handleClick = (type: string) => {
    setInformationType(type);
  }

  return (
    <>
      <div className={css.buttonWrapper}>
        <Link to={backHref} className={css.button}>Go back</Link>
        <IoIosArrowRoundBack className={css.buttonIcon} />
      </div>
      <div className={css.descriptionContainer}>
        <img alt={title} src={posterUrl} className={css.descriptionImage} />
        <div className={css.description}>
          <h2>
            {title} ({yearRelease})
          </h2>
          <p className={css.descriptionText}>
            User score: {userScore}%
          </p>
          <h3>Overview</h3>
          <p className={css.descriptionText}>
            {overview}
          </p>
          <h4>Genres</h4>
          <p className={css.descriptionText}>
            {filmGenres}
          </p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <p className={css.descriptionText}>
          Additional information
        </p>
        <ul className={css.additionalInfoList}>
          <li>
            <NavLink to={`/movie/${movieId}/cast`} onClick={() => handleClick('cast')}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={`/movie/${movieId}/reviews`} onClick={() => handleClick('reviews')}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      {informationType && (informationType === 'cast'
        ? <MovieCast />
        : <MovieReviews />
      )}
    </>
  )
}

export default MovieDetailsPage;