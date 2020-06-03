import React from 'react';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import EmpressImg from '../../assets/Empress.png';
import LogonImg from '../../assets/Img Logon.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={EmpressImg} alt="EmpressS" />
                <form>
                    <h1>FAÇA SEU LOGON</h1>
                    <input placeholder="Sua Agência" />

                    <button className="button" type="submit">ENTRAR</button>

                    <Link className="back-link" to="./Register">
                        <FiLogIn size={16} color='#240c64' />
                        Não Tenho Cadastro
                    </Link>
                </form>

            </section>

            <img src={LogonImg} alt="Empress" />
        </div>

    )
}