import React from "react";
import styles from './SearchForm.module.css';

const SearchForm = () => {
    return(
        <form className={styles["searchForm"]}>
            <input
                type="text"
            />
            <input
                type="submit"
                value="Search"
            />
        </form>
    )
}

export default SearchForm