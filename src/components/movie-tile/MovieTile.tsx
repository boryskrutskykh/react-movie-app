import React, { useState } from 'react';
import styles from './MovieTile.module.scss';
import { MovieTileProps } from './movie-tyle.types';

const MovieTile: React.FC<MovieTileProps> = ({ movie, onClick }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div className={styles.movieTile} onClick={onClick}>
      <img src={movie.imageUrl} alt={movie.name} className={styles.movieImage} />
      <div className={styles.movieInfo}>
        <h3 className={styles.movieName}>{movie.name}</h3>
        <div className={styles.movieYear}>{movie.releaseYear}</div>
        <div className={styles.movieGenres}>{movie.genres.join(', ')}</div>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ...
      </button>
      {menuVisible && (
        <div className={styles.contextMenu}>
          <button onClick={() => console.log('Edit')}>Edit</button>
          <button onClick={() => console.log('Delete')}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default MovieTile;
