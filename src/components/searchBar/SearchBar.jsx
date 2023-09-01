import { BsSearch } from 'react-icons/bs';
import styles from './SearchBar.module.css';
import { useState, useContext } from 'react';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [setSearchResults] = useState([]);
    const { setProducts } = useContext(AppContext);

    const handleSearch = async (e) => {
        e.preventDefault();

        const products = await fetchProducts(searchValue);
        setProducts(products);
        setSearchValue('');
        setSearchResults(products);


    }

    return (
        <form className={styles.search_bar} onSubmit={handleSearch}>
            <input
                type="search"
                value={searchValue}
                placeholder="Buscar produtos"
                className={styles.search_input}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className={styles.search_button}>
                <BsSearch />    
            </button>
        </form>
    )
}


export default SearchBar;