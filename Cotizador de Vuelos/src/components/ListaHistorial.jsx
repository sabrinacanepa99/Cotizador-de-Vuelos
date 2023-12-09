import React, {useEffect, useState} from 'react';
import style from '/src/Historial.module.css';

const ListarHistorial = () => {

    const[historial, setDataHistorial] = useState([]);

    useEffect( () => {
        let n = localStorage.length;
        let array = [];
        for (let i = 0; i < n; i++) {
            const registro = JSON.parse(localStorage.getItem(i));
            array.push(registro);
        }
        console.log(array);
        setDataHistorial(array);
    }, []);

    return (
        <section className={style.contenedor_lista_historial}>
            <ul>
                <li>
                    <p className={style.fecha}>Fecha</p>
                    <p className={style.vuelo}>Vuelo</p>
                    <p className={style.clase}>Clase</p>
                    <p className={style.boletos}>Boletos</p>
                    <p className={style.cotizacion}>Cotización</p>
                </li>
                {
                    historial && historial.map((indice) => (
                        <li key={indice.id}>
                            <p className={style.fecha}>{indice.fecha}</p>
                            <p className={style.vuelo}>{indice.pais_origen} a {indice.pais_destino}</p>
                            <p className={style.clase}>{indice.clase}</p>
                            <p className={style.boletos}>{indice.boletos}</p>
                            <p className={style.cotizacion}>${indice.costo_total}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}
 
export default ListarHistorial;