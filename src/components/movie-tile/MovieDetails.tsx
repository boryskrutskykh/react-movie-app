import React from 'react';
import styles from './MovieDetails.module.scss';
import { MovieDetailsProps } from './movie-tyle.types';

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <img src={movie.imageUrl} alt={movie.name} className={styles.poster} />
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.title}>
          {movie.name.toUpperCase()} <span className={styles.rating}>{movie.rating}</span>
        </div>
        <div className={styles.genre}>{movie.genres.join(', ')}</div>
        <div className={styles.yearAndDuration}>
          <span className={styles.year}>{movie.releaseYear}</span>
          <span className={styles.duration}>{movie.duration}</span>
        </div>
        <p className={styles.description}>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
