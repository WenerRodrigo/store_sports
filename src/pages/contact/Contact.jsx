import { useState } from "react";
import styles from './Contact.module.css';
import Header from '../../components/header/Header';
import Button from "../../components/button/Button";



const Contact = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulario enviados com sucesso:", formData);
        setFormData({
            nome: '',
            email: '',
            telefone: '',
            mensagem: ''
        })
    }


    return (
        <>
        <Header />
        <Button />
            <div className={styles.container}>
            <h2 className={styles.title}>Deixe sua mensagem</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.campos}>
                    <label className={styles.label} htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                        required
                    />
                </div>
                <div className={styles.campos}>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Digite seu Email"
                        required
                    />
                </div>
                <div className={styles.campos}>
                    <label className={styles.label} htmlFor="nome">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Digite seu Telefone"
                        required
                    />
                </div>
                <div className={styles.campos}>
                    <label className={styles.label} htmlFor="nome">Mensagem:</label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        placeholder="Escreva sua mensagem..."
                    />
                </div>
                <button className={styles.botao} type="submit" >Enviar</button>
            </form>
        </div>
        </>
    )
}

export default Contact;