import React from 'react';

export default function MoviePoster({ title, director, year, posterColor, deleteMovie }) {
  return (
    <div
      onClick={() => deleteMovie(title)}
      className="movie-poster"
      style={{ backgroundColor: posterColor }}
    >
      <h3>{title}</h3>
      <p>{director}</p>
      <p>{year}</p>
    </div>
  );
}
