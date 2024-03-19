import React from 'react';
import styles from './SortControl.module.scss';
import { SortControlProps } from './sort-control.types';

const SortControl: React.FC<SortControlProps> = ({ selectedSort, onSortChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value as 'releaseDate' | 'title');
  };

  return (
    <div className={styles.sortControl}>
      <label htmlFor="sort-select" className={styles.sortLabel}>
        SORT BY:
      </label>
      <select
        id="sort-select"
        value={selectedSort}
        onChange={handleSelectChange}
        className={styles.sortSelect}
      >
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
