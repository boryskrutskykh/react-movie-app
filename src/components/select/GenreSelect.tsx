import React from 'react';
import styles from './GenreSelect.module.css'

export interface GenreSelectProps {
    genres: string[];
    selectedGenre: string;
    onSelect: (genre: string) => void;
}

const GenreSelect: React.FC<GenreSelectProps> = ({genres, selectedGenre, onSelect}) => {
    return (
        <div className={styles.genreWrapper}>
            {genres.map((genre) => (
                <span
                    className={`${styles.selectButtons} ${selectedGenre === genre ? styles.selected : ''}`}
                    key={genre}
                    onClick={() => onSelect(genre)}
                >
                    {genre.toUpperCase()}
                </span>
            ))}
        </div>
    );
};

export default GenreSelect;
