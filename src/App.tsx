import React, {useState} from 'react';
import './App.css';
import {Counter, GenreSelect, SearchForm} from "./components";
import {handleSearch} from "./utils/searchHandler";

function App() {

    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const [selectedGenre, setSelectedGenre] = useState<string>('All');

    const handleSelectGenre = (genre: string) => {
        setSelectedGenre(genre);
    };

    return (
        <div className="App">
            <header>
                <div>
                    <p className="logo"><b style={{fontWeight: 900}}>netflix</b>roulette</p>
                    <button>ADD MOVIE</button>
                </div>
                <h1 style={{ color: "white", fontWeight: "300", fontSize: "40px"}}>FIND YOUR MOVIE</h1>
                <SearchForm initialQuery="" onSearch={handleSearch}/>
            </header>
            <div className="mainBlock">
                <GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleSelectGenre}/>
                <br/>
                <br/>
                <br/>
                <Counter initialValue={0}/>
            </div>
        </div>
    );
}

export default App;
