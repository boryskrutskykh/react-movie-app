export interface MovieInfo {
  id?: number;
  imageUrl: string;
  name: string;
  releaseYear: string;
  genres: string[];
  rating?: string;
  duration?: string;
  description?: string;
}

export interface MovieTileProps {
  movie: MovieInfo;
  onClick: () => void;
}

export interface MovieDetailsProps {
  movie: {
    imageUrl: string;
    name: string;
    releaseYear: string;
    rating: string;
    duration: string;
    description: string;
    genres: string[];

  };
}
