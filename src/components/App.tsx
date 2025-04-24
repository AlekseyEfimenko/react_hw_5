import Navigation from "./navigation/Navigation";
import MovieDetailsPage from "../pages/movie-details-page/MovieDetailsPage";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import('../pages/home-page/HomePage'));

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
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
