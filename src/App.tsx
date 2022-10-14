import React, {useState} from 'react';
import './App.css';
import SearchForm from "./components/SearchForm/SearchForm";
import Rentals from "./components/Rentals/Rentals";

function App() {
    const [keyword, setKeyword] = useState<any>('trailer');

    const onSearchFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const search = formData.get('search');

        setKeyword(search);
    }

    return (
        <div className="container">
            <SearchForm
                onSearchFormSubmit={onSearchFormSubmit}
                keyword={keyword}
            />
            <Rentals
                keyword={keyword}
            />
        </div>
    );
}

export default App;
