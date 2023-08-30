import { Link } from "react-router-dom";
import styles from './Button.module.css';

const Button = () => {
    return (
        <div>
            <Link to="/">
                <button className={styles.btn}>Voltar</button>
            </Link>
        </div>
    )
}



export default Button;