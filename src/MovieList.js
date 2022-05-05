import React from 'react';
import MoviePoster from './MoviePoster';

export default function MovieList({ allMovies, handleDeleteMovie }) {
  return (
    <div className="list">
      {allMovies.map((movie, i) => (
        <MoviePoster
          key={`${movie.title}-${movie.year}-${i}`}
          title={movie.title}
          director={movie.director}
          year={movie.year}
          posterColor={movie.posterColor}
          handleDeleteMovie={handleDeleteMovie}
        />
      ))}
    </div>
  );
}
