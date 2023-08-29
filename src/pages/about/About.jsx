import styles from './About.module.css';


const About = () => {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Conheça mais sobre nós</h2>
                <p className={styles.descricao}>Somos uma loja de esportes com mais de 5 anos de experiência no mercado.
                    Nossa paixão pelo esporte nos impulsionou a fornecer produtos de alta qualidade
                    e serviços excepcionais para nossos clientes. Estamos comprometidos em ajudar
                    atletas de todos os níveis a alcançar seus objetivos, fornecendo os melhores
                    equipamentos e roupas esportivas. Venha nos visitar e faça parte da nossa
                    comunidade esportiva!</p>
            </div>
        </>
    )
}


export default About;