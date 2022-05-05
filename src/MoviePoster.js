import React from 'react';

export default function MoviePoster({ title, director, year, posterColor, handleDeleteMovie }) {
  return (
    <div
      onClick={() => handleDeleteMovie && handleDeleteMovie(title)}
      className="movie-poster"
      style={{ backgroundColor: posterColor }}
    >
      <h3>{title}</h3>
      <p>{director}</p>
      <p>{year}</p>
    </div>
  );
}
