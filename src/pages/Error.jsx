import React from 'react';
import { Link } from "react-router-dom";
import './css/Error.css';

import Header from "../components/Header/Header";
import Main from '../components/Main/Main';
import Footer from "../components/Footer/Footer";

function Error(props) {
    const sentences = {
        "404": "Oups! La page que vous demandez n'existe pas.",
    }

    return (
        <React.Fragment>
            <Header />
            <Main>
                <div className="error_container">
                    <div className="error_content">
                        <div className="error_number">{props.number}</div>
                        <div className="error_sentence">{sentences[props.number]}</div>
                        <Link to="/" className="error_return">Retourner sur la page d'accueil</Link>
                    </div>
                </div>
            </Main>
            <Footer />
        </React.Fragment>
    )
}

export default Error;