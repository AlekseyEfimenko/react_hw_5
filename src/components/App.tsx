import Navigation from "./navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import('../pages/home-page/HomePage'));
const MovieDetailsPage = lazy(() => import('../pages/movie-details-page/MovieDetailsPage'));
const MoviesPage = lazy(() => import('../pages/movies-page/MoviesPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} >
            <Route path="cast" element={<MovieDetailsPage />} />
            <Route path="reviews" element={<MovieDetailsPage />} />
          </Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
