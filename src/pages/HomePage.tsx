import React, {useState} from 'react';
import {Counter, GenreSelect, SearchForm} from "../components";
import {handleSearch} from "../utils/searchHandler";
import {Genre, GENRES} from "../constants/genres";

export const HomePage: React.FC = () => {

    const [selectedGenre, setSelectedGenre] = useState<Genre>(Genre.All);

    const handleSelectGenre = (genre: string) => {
        if (Object.values(Genre).includes(genre as Genre)) {
            setSelectedGenre(genre as Genre);
        } else {
            console.error("Genre does not exist.");
        }
    };

    return (
        <div>
            <header>
                <div className="heading">
                    <p className="logo"><b className='logoStart'>netflix</b>roulette</p>
                    <button>ADD MOVIE</button>
                </div>
                <h1 className="title">FIND YOUR MOVIE</h1>
                <SearchForm initialQuery="" onSearch={handleSearch}/>
            </header>
            <div className="mainBlock">
                <GenreSelect genres={GENRES} selectedGenre={selectedGenre} onSelect={handleSelectGenre}/>
                <br/>
                <br/>
                <br/>
                <Counter initialValue={0}/>
            </div>
        </div>
    );
};
