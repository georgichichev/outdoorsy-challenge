import React from "react";
import styles from './SearchForm.module.css';

interface SearchFormProps{
    onSearchFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    keyword: string
}

const SearchForm = ({onSearchFormSubmit}: SearchFormProps) => {
    return(
        <form
            onSubmit={onSearchFormSubmit}
            className={styles["searchForm"]}
        >
            <input
                className={styles["searchInput"]}
                type="text"
                name="search"
                placeholder="Enter keyword"
            />
            <input
                type="submit"
                value="Search"
                className={styles["searchSubmitInput"]}
            />
        </form>
    )
}

export default SearchForm