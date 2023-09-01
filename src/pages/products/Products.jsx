import camisa from '../../assets/cam_sp.png';
import camisaCity from '../../assets/cam_man_city.jpg';
import camisaUnited from '../../assets/cam_man_united.png';
import bola from '../../assets/bola_uefa.png';
import bolaAdidas from '../../assets/bola_adidas.png';
import bolaPenalty from '../../assets/bola_penalty.jpg';
import chuteiraAdidas from '../../assets/chut_adidas.png';
import raquete from '../../assets/raquete.png';
import styles from './Products.module.css';
import Button from '../../components/button/Button';
import HeaderCart from '../../components/headerCart/HeaderCart';
import { BsFillCartPlusFill } from 'react-icons/bs';
import Cart from '../../components/cart/Cart';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const productList = [
    {
        id: 1,
        nome: 'Camisa São Paulo FC',
        imagem: camisa,
        precoOrignal: 'R$ 299,90',
        precoPromocional: 'R$ 229,90',
        valorParcelado: 'ou 5x de 59,98'
    },
    {
        id: 2,
        nome: 'Camisa Manchester City FC',
        imagem: camisaCity,
        precoOrignal: 'R$ 299,90',
        precoPromocional: 'R$ 229,90',
        valorParcelado: 'ou 5x de 59,98'
    },
    {
        id: 3,
        nome: 'Bola UEFA Champions League',
        imagem: bola,
        precoOrignal: 'R$ 199,90',
        precoPromocional: 'R$ 149,90',
        valorParcelado: 'ou 5x de 39,98'
    },
    {
        id: 4,
        nome: 'Bola Adidas',
        imagem: bolaAdidas,
        precoOrignal: 'R$ 199,90',
        precoPromocional: 'R$ 119,90',
        valorParcelado: 'ou 5x de 39,98'
    },
    {
        id: 5,
        nome: 'Camisa Fem São Paulo FC',
        imagem: camisa,
        precoOrignal: 'R$ 199,90',
        precoPromocional: 'R$ 149,90',
        valorParcelado: 'ou 5x de 39,98'
    },
    {
        id: 6,
        nome: 'Raquete Tênis',
        imagem: raquete,
        precoOrignal: 'R$ 249,90',
        precoPromocional: 'R$ 179,90',
        valorParcelado: 'ou 5x de 49,98'
    },
    {
        id: 7,
        nome: 'Bola Futebol Campo Penalty',
        imagem: bolaPenalty,
        precoOrignal: 'R$ 179,90',
        precoPromocional: 'R$ 129,90',
        valorParcelado: 'ou 5x de 35,98'
    },
    {
        id: 8,
        nome: 'Camisa Manchester United FC',
        imagem: camisaUnited,
        precoOrignal: 'R$ 299,90',
        precoPromocional: 'R$ 259,90',
        valorParcelado: 'ou 5x de 49,98'
    },
    {
        id: 9,
        nome: 'Chuteira Adidas Campo',
        imagem: chuteiraAdidas,
        precoOrignal: 'R$ 199,90',
        precoPromocional: 'R$ 139,90',
        valorParcelado: 'ou 5x de 39,98'
    },
]

const Products = ({ produto }) => {
    
    const { cartItens, setCartItens } = useContext(AppContext);

    const handleAddCart = (products) => { setCartItens([ ...cartItens, products]);}
    return (
        <>
            <HeaderCart />
            <Cart />
            <Button />
            <div className={styles.produto}>
                {productList.map((produto, index) => (
                    <div key={index} className={styles.card}>
                        <button
                            onClick={() => handleAddCart(produto)}
                            className={styles.btn_card}>
                            <BsFillCartPlusFill />
                        </button>
                        <img src={produto.imagem} alt={`Imagem${index}`} />
                        <p className={styles.descricao}>{produto.nome}</p>
                        <span>{`De${produto.precoOrignal}`}</span> <strong>{`Por${produto.precoPromocional}`}</strong>
                        <i> {`${produto.valorParcelado}`}</i>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products;