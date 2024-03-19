import React, { useState } from 'react';
import styles from './GenreSelect.module.css';
import { GenreSelectProps } from './select.types';
import classNames from 'classnames';
import { MOVIE_LIST } from '../movie-tile/movies-data';
import { Genre } from '../../constants/genres';

const getGenreClass = (isSelected: boolean) =>
  classNames(styles.selectButtons, { [styles.selected]: isSelected });

const GenreSelect: React.FC<GenreSelectProps> = ({ genres, selectedGenre, onSelect }) => {
  const filteredMovies = MOVIE_LIST.filter(
    (movie) => selectedGenre === Genre.All || movie.genres.includes(selectedGenre),
  );

  return (
    <div className={styles.genreWrapper}>
      {genres.map((genre) => (
        <span className={getGenreClass(selectedGenre === genre)} key={genre} onClick={() => onSelect(genre)}>
          {genre.toUpperCase()}
        </span>
      ))}
      <p className="filtered-count">
        <b>{filteredMovies.length}</b> movies found
      </p>
    </div>
  );
};

export default GenreSelect;
