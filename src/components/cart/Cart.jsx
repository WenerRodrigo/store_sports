import { useContext } from 'react';
import CartItem from '../cartItem/CartItem';
import styles from './Cart.module.css';
import AppContext from '../../context/AppContext';

const Cart = () => {
    const { cartItens, isCartVisible } = useContext(AppContext);
    const totalPrice = cartItens.reduce((acc, item) => item.price + acc, 0);



    return (
        <section className={styles.cart}>
            <div className={styles.cart_itens}>
                {cartItens.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
            </div>
            <div className={styles.cart_resume}>{totalPrice}</div>
        </section>
    )
}


export default Cart;