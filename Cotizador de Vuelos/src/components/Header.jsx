import React from 'react';
import { Link } from "react-router-dom";

const Header = ({titulo, urlImg, alt, style}) => {

    return (
        <section className={style.div_header}>
            <h1>{titulo}</h1>
            <Link to="/"><img src={urlImg} alt={alt} /></Link>
        </section>
    );

}

export default Header