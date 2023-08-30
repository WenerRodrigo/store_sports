import camisa from '../../assets/cam_sp.png';
import camisaFem from '../../assets/cam_sp.png';
import camisaCity from '../../assets/cam_man_city.jpg';
import camisaUnited from '../../assets/cam_man_united.png';
import styles from './Cards.module.css';


const Cards = () => {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.itens} src={camisa} alt="Camisa São Paulo FC" />
                <p className={styles.descricao}>Camisa São Paulo FC</p>
                <span>De R$ 299,90</span><strong> Por R$ 229,90</strong>
                <i> ou 5x de 59,98</i>
            </div>
            <div>
                <img className={styles.itens} src={camisaCity} alt="Camisa Manchester City" />
                <p className={styles.descricao}>Camisa Manchester City</p>
                <span>De R$ 399,90</span><strong> Por R$ 299,90</strong>
                <i> ou 5x de 79,98</i>
            </div>
            <div>
                <img className={styles.itens} src={camisaUnited} alt="Camisa Manchester United" />
                <p className={styles.descricao}>Camisa Manchester United</p>
                <span>De R$ 399,90</span><strong> Por R$ 299,90</strong>
                <i> ou 5x de 79,98</i>
            </div>
            <div>
                <img className={styles.itens} src={camisaFem} alt="Camisa Feminina São Paulo FC" />
                <p className={styles.descricao}>Camisa Fem São Paulo FC</p>
                <span>De R$ 249,90</span><strong> Por R$ 179,90</strong>
                <i> ou 5x de 49,98</i>
            </div>
        </div>
    )
}

export default Cards;