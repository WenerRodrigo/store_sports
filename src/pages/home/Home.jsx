import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={styles.menu}>
                <h1 className={styles.title}>Mega Store do Esporte</h1>
                <div>
                    <ul className={styles.navegacao}>
                        <li>Produtos</li>
                        <li>Contato</li>
                        <li>Sobre</li>
                    </ul>
                </div>
            </div>
            <div className={styles.descricao}>
                <h2>Confira abaixo os nossos produtos</h2>
            </div>
        </>

    )
}

export default Home;