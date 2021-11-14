import React, {useState} from 'react';

const Header = ({filtered, setFiltered, assets}) => {
    const [search, setSearch] = useState('');
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const filterSearch = () => {
        setFiltered(assets.filter(asset => asset.name.toLowerCase().includes(search)));
    }

    const resetSearch = () => {
        setFiltered(assets);
        document.getElementById('searchInput').value = '';
    }

    return(
        <div>
            <input type="text" onChange={searchHandler} id = 'searchInput'></input>
            <button onClick={filterSearch} className="button">Search</button>
            <button onClick={resetSearch} className="button">Reset</button>
        </div>
    );
}

export default Header;