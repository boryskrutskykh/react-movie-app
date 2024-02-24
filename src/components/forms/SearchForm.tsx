import React, { useState } from 'react';
import styles from "./SearchForm.module.css"

export interface SearchFormProps {
    initialQuery: string;
    onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ initialQuery, onSearch }) => {
    const [query, setQuery] = useState(initialQuery);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(query);
        }
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                onKeyUp={handleKeyPress}
                placeholder={"What do you want to watch?"}
            />
            <button className={styles.searchButton} type="submit">SEARCH</button>
        </form>
    );
};

export default SearchForm;
