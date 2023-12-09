import React from 'react';
import style from'/src/Inicio.module.css';

const Resultado = ({total}) => {

    return ( 
        <section className={style.resultado}>
            <section>
                <h2>Total: ${total}</h2>
            </section>
        </section>
    );

}
 
export default Resultado;
