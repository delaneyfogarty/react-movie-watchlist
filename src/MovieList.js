import React from 'react';
import MoviePoster from './MoviePoster';

export default function MovieList({ allMovies, handleDeleteMovie }) {
  console.log('allmovies', allMovies);
  return (
    <div className="list">
      {allMovies.map((movie, i) => (
        <MoviePoster
          key={`${movie.title}-${movie.year}-${i}`}
          movie={movie}
          handleDeleteMovie={handleDeleteMovie}
        />
      ))}
    </div>
  );
}
