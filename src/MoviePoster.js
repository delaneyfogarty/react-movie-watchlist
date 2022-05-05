import React from 'react';

export default function MoviePoster({ movie, handleDeleteMovie }) {
  return (
    <div
      onClick={() => handleDeleteMovie && handleDeleteMovie(movie.title)}
      className="movie-poster"
      style={{ backgroundColor: movie.posterColor }}
    >
      <h3>{movie.title}</h3>
      <p>{movie.director}</p>
      <p>{movie.year}</p>
    </div>
  );
}
