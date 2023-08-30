import styles from './CartButton.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CartButton = () => {
    return (
        <button type='button' className={styles.cart_button}>
            <AiOutlineShoppingCart />
            <span className={styles.cart_status}>1</span>
        </button>
    )
}


export default CartButton;