import React, {useState} from 'react';
import './App.css';
import SearchForm from "./components/SearchForm/SearchForm";
import Rentals from "./components/Rentals/Rentals";

function App() {
    const [keyword, setKeyword] = useState('');

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };

    return (
        <div className="container">
            <SearchForm
                onInputChange={onInputChange}
                keyword={keyword}
            />
            <Rentals
                keyword={keyword}
            />
        </div>
    );
}

export default App;
