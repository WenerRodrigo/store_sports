import { useContext } from 'react';
import styles from './CartItem.module.css';
import { BsCartDashFill } from 'react-icons/bs';
import AppContext from '../../context/AppContext';


const CartItem = ({ data }) => {

    const { cartItens, setCartItens} = useContext(AppContext);
    const { id, thumbnail, title , price } = data;

    const handleRemoveItem = () => {
        const updatedCart = cartItens.filter((item) => item.id !== id);
        setCartItens(updatedCart);
    }
    return (
        <section className={styles.cart_item}>
            <img
                src={thumbnail}
                alt="Imagem do produto"
                className={styles.cart_item_image}
            />
            <div className={styles.cart_content}>
                <h3 className={styles.cart_title}>{title}</h3>
                <h3 className={styles.item_price}>{price}</h3>
                <button
                    onClick={handleRemoveItem}
                    type="button"
                    className={styles.button_remove}>
                    <BsCartDashFill />
                </button>
            </div>
        </section>
    )
}

export default CartItem;