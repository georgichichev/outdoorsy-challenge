import useFetch from "../../hooks/useFetch";
import {urlSetter} from "../../util/util";
import Rental from "./Rental/Rental";
import React from "react";
import styles from './Rentals.module.css';

interface Keyword {
    keyword: string
}

const Rentals = ({keyword}: Keyword) => {
    const url = urlSetter(keyword);

    const {rentalsData, loading, error} = useFetch(url);

    return (
        <div className={styles["rentals"]}>
            {error && <p>'An error occurred. Awkward..'</p>}
            {loading && <p>Loading...</p>}
            {rentalsData.length == 0 ? <p>No results.</p> : null}
            {rentalsData.map(x =>
                <Rental
                    key={x.id}
                    name={x.name}
                    imageUrl={x.imageUrl}
                />
            )}
        </div>
    )
}

export default Rentals