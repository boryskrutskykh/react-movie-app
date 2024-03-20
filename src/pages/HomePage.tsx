import React, { useMemo, useState } from 'react';
import { GenreSelect, SearchForm } from '../components';
import { handleSearch } from '../utils/searchHandler';
import { Genre, GENRES } from '../constants/genres';
import MovieTile from '../components/movie-tile/MovieTile';
import { MOVIE_LIST } from '../components/movie-tile/movies-data';
import { MovieDetailsProps, MovieInfo } from '../components/movie-tile/movie-tyle.types';
import MovieDetails from '../components/movie-tile/MovieDetails';
import SortControl from '../components/sort-control/SortControl';
import MovieDialog from '../components/dialog/MovieDialog';
import styles from '../components/buttons/Button.module.scss';

export const HomePage: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre>(Genre.All);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsProps['movie'] | null>(null);
  const [sortOption, setSortOption] = useState<'releaseDate' | 'title'>('releaseDate');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSortChange = (newSortOption: 'releaseDate' | 'title') => {
    setSortOption(newSortOption);
  };

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const resetSelectedMovie = () => {
    setSelectedMovie(null);
  };

  const filteredMovies = MOVIE_LIST.filter(
    (movie) => selectedGenre === Genre.All || movie.genres.includes(selectedGenre),
  );

  const sortedMovies = useMemo(() => {
    return filteredMovies.slice().sort((a, b) => {
      if (sortOption === 'title') {
        return a.name.localeCompare(b.name);
      } else {
        return b.releaseYear.localeCompare(a.releaseYear);
      }
    });
  }, [filteredMovies, sortOption]);

  const handleMovieClick = (movie: MovieInfo) => {
    const movieDetails = {
      imageUrl: movie.imageUrl,
      name: movie.name,
      releaseYear: movie.releaseYear.toString(),
      rating: movie.rating || '0',
      duration: movie.duration || '0',
      description: movie.description || 'No description available',
      genres: movie.genres,
    };

    setSelectedMovie(movieDetails);
  };

  const handleSelectGenre = (genre: string) => {
    if (Object.values(Genre).includes(genre as Genre)) {
      setSelectedGenre(genre as Genre);
    } else {
      console.error('Genre does not exist.');
    }
  };

  return (
    <div>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onSearchClick={resetSelectedMovie} />
      ) : (
        <header>
          <div className="heading">
            <p className="logo">
              <b className="logoStart">netflix</b>roulette
            </p>
            <button className={styles.mainButton} onClick={toggleDialog}>
              + ADD MOVIE
            </button>
          </div>
          <h1 className="title">FIND YOUR MOVIE</h1>
          <SearchForm initialQuery="" onSearch={handleSearch} />
        </header>
      )}
      {isDialogOpen && (
        <MovieDialog
          title={'Add movie'}
          isOpen={isDialogOpen}
          onClose={toggleDialog}
          onSubmit={(movieData) => {
            console.log(movieData);
            toggleDialog();
          }}
        />
      )}

      <div className="mainBlock">
        <div className="sortAndFilter">
          <GenreSelect genres={GENRES} selectedGenre={selectedGenre} onSelect={handleSelectGenre} />
          <SortControl selectedSort={sortOption} onSortChange={handleSortChange} />
        </div>
        <div className="movieList">
          {sortedMovies.map((movie) => (
            <MovieTile key={movie.id} movie={movie} onClick={() => handleMovieClick(movie)} />
          ))}
        </div>
      </div>
    </div>
  );
};
