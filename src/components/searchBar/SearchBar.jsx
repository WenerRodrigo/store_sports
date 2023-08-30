import { BsSearch } from 'react-icons/bs';
import styles from './SearchBar.module.css';
import { useState } from 'react';


const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');

    return (
        <form className={styles.search_bar}>
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