import React, { useState } from 'react';
import styles from './MovieTile.module.scss';
import { MovieTileProps } from './movie-tyle.types';
import MovieDialog from '../dialog/MovieDialog';

const MovieTile: React.FC<MovieTileProps> = ({ movie, onClick }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setMenuVisible(!menuVisible);
  };

  const openEditDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsEditDialogOpen(true);
  };
  const closeEditDialog = () => setIsEditDialogOpen(false);

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
          <button onClick={openEditDialog}>Edit</button>
          <button onClick={() => console.log('Delete')}>Delete</button>
        </div>
      )}
      {isEditDialogOpen && (
        <MovieDialog
          title={'Edit movie'}
          isOpen={isEditDialogOpen}
          onClose={closeEditDialog}
          initialMovieInfo={movie}
          onSubmit={(editedMovie) => {
            console.log(editedMovie);
            closeEditDialog();
          }}
        />
      )}
    </div>
  );
};

export default MovieTile;
