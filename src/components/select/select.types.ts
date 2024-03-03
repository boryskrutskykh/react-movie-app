export interface GenreSelectProps {
    genres: string[];
    selectedGenre: string;
    onSelect: (genre: string) => void;
}