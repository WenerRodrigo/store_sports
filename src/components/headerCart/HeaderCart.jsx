import CartButton from "../CartButton/CartButton";
import SearchBar from "../searchBar/SearchBar";
import styles from './HeaderCart.module.css';

const HeaderCart = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <SearchBar />
                <CartButton />
            </div>
        </header>
    )
}

export default HeaderCart;