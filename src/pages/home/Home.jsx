import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Cards from '../../components/cards/Cards';

const Home = () => {
    return (
        <>
            <div className={styles.menu}>
                <h1 className={styles.title}>Mega Store do Esporte</h1>
                <div>
                    <ul className={styles.navegacao}>
                        <Link to="/products">Produtos</Link>
                        <Link to="/contact">Contato</Link>
                        <Link to="/about">Sobre</Link>
                    </ul>
                </div>
            </div>
            <div className={styles.descricao}>
                <h2>Confira abaixo os nossos produtos</h2>
            </div>
            <Cards />
        </>

    )
}

export default Home;