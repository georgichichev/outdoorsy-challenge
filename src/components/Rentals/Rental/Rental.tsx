import styles from './Rental.module.css';

interface RentalProps{
    name: string,
    imageUrl: string
}

const Rental = (props: RentalProps) => {
    return(
        <section className={styles["rental"]}>
            <img
                className={styles["rentalImage"]}
                src={props.imageUrl}
                alt="rentalImage"
            />
            <p>{props.name}</p>
        </section>
    )
}

export default Rental