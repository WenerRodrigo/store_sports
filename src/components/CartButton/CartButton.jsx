import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import styles from './CartButton.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CartButton = () => {

    const { cartItens } = useContext(AppContext);

    return (
        <button type='button' className={styles.cart_button}>
            <AiOutlineShoppingCart />
            <span className={styles.cart_status}>{cartItens.length}</span>
        </button>
    )
}


export default CartButton;