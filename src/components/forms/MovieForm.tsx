import React, { ChangeEvent, useState } from 'react';
import { MovieInfo } from '../movie-tile/movie-tyle.types';
import { GENRES_ARRAY } from '../movie-tile/movies-data';
import styles from './MovieForm.module.scss';
import Select, { MultiValue } from 'react-select';

interface MovieFormProps {
  initialMovieInfo?: MovieInfo;
  onSubmit: (movieInfo: MovieInfo) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ initialMovieInfo, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<{ value: string; label: string }>>([]);

  const initialFormState: MovieInfo = {
    id: undefined,
    imageUrl: '',
    name: '',
    releaseYear: '',
    genres: [],
    rating: '',
    duration: '',
    description: '',
  };

  const [movieInfo, setMovieInfo] = useState<MovieInfo>(initialMovieInfo || initialFormState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMovieInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(movieInfo);
  };

  const handleSelectChange = (newValues: MultiValue<{ value: string; label: string }>) => {
    setSelectedOptions(newValues);
  };

  const handleReset = () => {
    setMovieInfo(initialFormState);
    setSelectedOptions([]);
  };

  const customStyles = {
    control: (base: any) => ({
      ...base,
      height: 57,
      width: '74%',
      backgroundColor: '#323232',
      borderColor: 'none',
      borderStyle: 'none',
    }),
    menu: (base: any) => ({
      ...base,
    }),
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formWrapper}>
        <div className={styles.formRightSide}>
          <label>
            <p className={styles.formText}>TITLE:</p>
            <input className={styles.formFields} name="name" value={movieInfo.name} onChange={handleChange} />
          </label>
          <label>
            <p className={styles.formText}>MOVIE URL:</p>
            <input
              className={styles.formFields}
              name="imageUrl"
              value={movieInfo.imageUrl}
              onChange={handleChange}
            />
          </label>
          <div>
            <p className={styles.formText}>GENRE:</p>
            <Select
              isMulti
              defaultValue={selectedOptions}
              onChange={handleSelectChange}
              options={GENRES_ARRAY.map((genre) => ({ value: genre.name, label: genre.name }))}
              styles={customStyles}
            />
          </div>
        </div>
        <div className={styles.formLeftSide}>
          <label>
            <p className={styles.formText}>RELEASE DATE:</p>
            <input
              className={styles.formFieldsShort}
              type="date"
              name="releaseYear"
              value={movieInfo.releaseYear}
              onChange={handleChange}
            />
          </label>
          <label>
            <p className={styles.formText}>RATING:</p>
            <input
              className={styles.formFieldsShort}
              type="number"
              step="0.1"
              name="rating"
              value={movieInfo.rating}
              onChange={handleChange}
            />
          </label>
          <label>
            <p className={styles.formText}>RUNTIME:</p>
            <input
              className={styles.formFieldsShort}
              name="duration"
              value={movieInfo.duration}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <label>
        <p className={styles.formText}>OVERVIEW:</p>
        <textarea
          className={styles.formTextArea}
          name="description"
          value={movieInfo.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <div className={styles.formButtonsWrapper}>
        <button className={styles.formButtons} role='reset-button' type="button" onClick={handleReset}>
          RESET
        </button>
        <button className={styles.formButtons} type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default MovieForm;
