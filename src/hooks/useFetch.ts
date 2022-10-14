import { useState, useEffect } from 'react';

interface RentalsState{
    rentalsData:{
        id: string
        name: string
        imageUrl: string
    }[]
}

interface RentalsResult{
    data: Array<{
        id: string
        attributes:{
            name:string
        }
        relationships:{
            primary_image:{
                data:{
                    id: string
                }
            }
        }
    }>
    included: Array<{
        id: string
        attributes:{
            url: string
        }
    }>
}

const parseRentalUrl = (id: string, included: RentalsResult["included"]) => {
    return included.filter(x => x.id === id)[0].attributes.url;
};


function useFetch(url: string) {
    const [rentalsData, setRentalsData] = useState<RentalsState["rentalsData"]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)

        fetch(url)
            .then(res => res.json())
            .then(result => {
                parseRentalsData(result)
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [url]);

    const parseRentalsData = (rentalsResult: RentalsResult) =>{
        const {data, included} = rentalsResult;

        const parsedRentalsData = data.map(rental => {
            const imageId = rental.relationships.primary_image.data.id;

            return{
                id: rental.id,
                name: rental.attributes.name,
                imageUrl: parseRentalUrl(imageId, included)
            }
        })

        setRentalsData(parsedRentalsData);
    };

    return {rentalsData, loading, error}
}

export default useFetch;