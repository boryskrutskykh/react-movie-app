export interface SortControlProps {
  selectedSort: 'releaseDate' | 'title';
  onSortChange: (value: 'releaseDate' | 'title') => void;
}