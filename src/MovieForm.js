import React from 'react';

export default function MovieForm({
  title,
  setTitle,
  year,
  setYear,
  director,
  setDirector,
  posterColor,
  setPosterColor,
  allMovies,
  setAllMovies,
}) {
  function handleSubmitMovie(e) {
    e.preventDefault();
    const newMovie = {
      title,
      director,
      year,
      posterColor,
    };

    setAllMovies([...allMovies, newMovie]);

    setTitle('');
    setDirector('');
    setYear('');
    setPosterColor('red');
  }
  return (
    <div>
      <form onSubmit={handleSubmitMovie}>
        <label>
          Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Director
          <input value={director} onChange={(e) => setDirector(e.target.value)} />
        </label>
        <label>
          Year Released
          <input value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <label>
          <select value={posterColor} onChange={(e) => setPosterColor(e.target.value)}>
            <option value="crimson">Red</option>
            <option value="rebeccapurple">Purple</option>
            <option value="gold">Gold</option>
            <option value="navy">Navy</option>
          </select>
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
