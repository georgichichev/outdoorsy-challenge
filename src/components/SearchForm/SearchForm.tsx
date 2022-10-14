import React from "react";
import styles from './SearchForm.module.css';

interface SearchFormProps{
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    keyword: string
}

const SearchForm = ({keyword, onInputChange}: SearchFormProps) => {
    return(
            <input
                className={styles["searchInput"]}
                type="text"
                value={keyword}
                onChange={onInputChange}
                placeholder="Enter keyword"
            />
    )
}

export default SearchForm