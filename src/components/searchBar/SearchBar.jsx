import { BsSearch } from 'react-icons/bs';
import styles from './SearchBar.module.css';
import { useState } from 'react';
import {ListProducts}  from '../../utils/ListProducts';


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleSearch = async (e) => {
        e.preventDefault();
        
        const results = await ListProducts.filter((product) => {
            return product.name.toLowerCase().includes(searchValue.toLowerCase());
        });

        setSearchResults(results);
    }

    return (
        <form className={styles.search_bar} onSubmit={handleSearch}>
            <input
                type="search"
                value={searchValue}
                placeholder="Buscar produtos"
                className={styles.search_input}
                onChange={(e) => setSearchValue(e.target.value)}
                required
            />
            <button type="submit" className={styles.search_button}>
                <BsSearch />    
            </button>
        </form>
    )
}


export default SearchBar;