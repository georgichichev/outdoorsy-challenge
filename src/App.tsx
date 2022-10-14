import React, {useState} from 'react';
import './App.css';
import SearchForm from "./components/SearchForm/SearchForm";

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
        </div>
    );
}

export default App;
