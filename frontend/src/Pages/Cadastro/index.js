import React from 'react';
import { Link } from 'react-router-dom';


import './styles.css';

import Imagem from '../../assets/imagem.png';

export default function Cadastro() {
    return (
        <div className="cadastro-container">
            <div>
                <header>
                    <img src={Imagem} alt="Empress" />

                    <h1>Material</h1>
                </header>
            </div>


            <div className="content">

                <form>
                    <div className="input-group">
                        <input placeholder="Produto" />
                        <input placeholder="Qtd" style={{ width: 90 }} />


                    </div>

                    <button className="button" type="submit" >Cadastrar</button>

                </form>

            </div>

        </div>
    )
}