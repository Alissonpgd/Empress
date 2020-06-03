import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Imagem from '../../assets/imagem.png';

export default function Solicitacao() {
    return (
        <div className="solicitation-container">
            <div className="content">
                <section >
                    <header>
                        <img src={Imagem} alt="Empress" />

                        <h1>ENTRADA DE MATERIAIS</h1>
                    </header>

                </section>

                <form >
                    <div>
                        <input placeholder="Produto" />
                        <input placeholder="Qtd" style={{ width: 187.5 }} />

                    </div>
                </form>

                <button className="button" type="submit" >Cadastrar</button>
                <Link className="back-link" to="./cadastro">

                </Link>
            </div>
        </div>
    );
}
