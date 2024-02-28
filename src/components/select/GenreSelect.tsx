import React from 'react';
import styles from './GenreSelect.module.css'
import {GenreSelectProps} from "./select.types";
import classNames from 'classnames';

const getGenreClass = (isSelected: boolean) =>
    classNames(styles.selectButtons, {[styles.selected]: isSelected});

const GenreSelect: React.FC<GenreSelectProps> = ({genres, selectedGenre, onSelect}) => {
    return (
        <div className={styles.genreWrapper}>
            {genres.map((genre) => (
                <span
                    className={getGenreClass(selectedGenre === genre)}
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
