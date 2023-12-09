import React from 'react';
import Header from './Header.jsx';
import ListarHistorial from './ListaHistorial.jsx';
import style from '/src/Historial.module.css';


const Historial = () => {

    const currentYear = new Date().getFullYear();

    return ( 
        <>
            <main className={style.mainContainer}>
                <header className={style.header}>
                    <Header 
                        titulo={"Historial de Cotización"}
                        urlImg={"src/img/botonDeInicio.png"}
                        alt={"ir a inicio"}
                        style={style}
                    />
                </header>
                <section className={style.container}>
                    <ListarHistorial

                    />
                </section>
                <footer className={style.footer}>
                    <p>&copy; {currentYear} <a href="https://github.com/sabrinacanepa99" target='_blank'>Sabrina Cánepa</a>. Todos los derechos reservados.</p>
                </footer>
            </main>
        </>
    );
}
 
export default Historial;