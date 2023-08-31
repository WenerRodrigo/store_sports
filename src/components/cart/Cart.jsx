import CartItem from '../cartItem/CartItem';
import styles from './Cart.module.css';

const Cart = () => {
    return (
        <section className={styles.cart}>
            <div className={styles.cart_itens}>
                <CartItem data={{thumbnail: '', title: '', price: '123,00'}}/>
            </div>
            <div className={styles.cart_resume}>resumo do carrinho</div>
        </section>
    )
}


export default Cart;