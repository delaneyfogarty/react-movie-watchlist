import React from 'react';

export default function MoviePoster({ title, director, year, posterColor, handleDeleteMovie }) {
  return (
    <div
      onClick={() => (handleDeleteMovie ? handleDeleteMovie(title) : null)}
      className="movie-poster"
      style={{ background: posterColor }}
    >
      <h3>{title}</h3>
      <p>{year}</p>
      <p>by {director}</p>
    </div>
  );
}
