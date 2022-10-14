import React from "react";
import styles from './SearchForm.module.css';

interface SearchFormProps{
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    keyword: string
}

const SearchForm = ({keyword, onInputChange}: SearchFormProps) => {
    return(
        <form className={styles["searchForm"]}>
            <input
                type="text"
                value={keyword}
                onChange={onInputChange}
            />
            <input
                type="submit"
                value="Search"
            />
        </form>
    )
}

export default SearchForm