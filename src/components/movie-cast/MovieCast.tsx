import { useEffect, useState } from "react";
import { getMovieCredits } from "../../movie-api";
import { useParams } from "react-router-dom";
import { Actor } from "../../types";
import css from './MovieCast.module.css';
  
const MovieCast = () => {
  const [actors, setActors] = useState<Actor[]>([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async (id: string) => {
      const response: Actor[] = await getMovieCredits(id);
      console.log(response);
      setActors(response);
    }

    if (movieId) {
      getCast(movieId);
    }
  }, [movieId])

  return (
    <ul className={css.actors}>
      {actors.map(actor => {
        const { character, name, profile_path } = actor;
        const actorImage = 'https://image.tmdb.org/t/p/original' + profile_path;

        return (
          <li key={name}>
            <img alt={name} src={actorImage} className={css.actorImage} />
            <p className={css.actorText}>
              {name}
            </p>
            <p className={css.actorText}>
              Character: {character}
            </p>
          </li>
        )
      })}
    </ul>
  );
}

export default MovieCast