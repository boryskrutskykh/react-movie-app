import React from 'react';
import Dialog from './Dialog';
import MovieForm from '../forms/MovieForm';
import { MovieInfo } from '../movie-tile/movie-tyle.types';

interface MovieDialogProps {
  title: string,
  isOpen: boolean;
  onClose: () => void;
  initialMovieInfo?: MovieInfo;
  onSubmit: (movieInfo: MovieInfo) => void;
}

const MovieDialog: React.FC<MovieDialogProps> = ({ isOpen, onClose, initialMovieInfo, onSubmit, title }) => {
  if (!isOpen) return null;

  return (
    <Dialog title={title} onClose={onClose}>
      <MovieForm
        initialMovieInfo={initialMovieInfo}
        onSubmit={(movieInfo) => {
          onSubmit(movieInfo);
          onClose();
        }}
      />
    </Dialog>
  );
};

export default MovieDialog;
