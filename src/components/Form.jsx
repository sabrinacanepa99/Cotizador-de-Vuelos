import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import {cotizar} from '/src/js/cotizar';
import {agregarRegistroAlHistorial} from '/src/js/historial';
import style from'/src/Inicio.module.css';

const Form = ({paisOrigen, setPaisOrigen, paisDestino, setPaisDestino, setTotal, claseSelect, setClaseSelect}) => {
    
    const selectValue = true;

    const[paises, setDataPaises] = useState([]);
    const[clases, setDataClases] = useState([]);
    const[cantidadBoletos, setCantidadBoletos] = useState(1);
    const[error, setError] = useState(false);


    useEffect( () => {
        fetch('../src/paises.json')
        .then(response => {
            if (!response.ok) {
                Swal.fire({
                    title: 'Error en la red',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                throw new Error('Error en la red');
            }
            return response.json();
        })
        .then(data => {
            setDataPaises(data);
        })
        .catch(error => {
            console.error('Ha habido un problema con su solicitud:', error);
            Swal.fire({
                title: 'Ha habido un problema con su solicitud',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        });

        fetch('../src/clases.json')
        .then(response => {
            if (!response.ok) {
                Swal.fire({
                    title: 'Error en la red',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                throw new Error('Error en la red');
            }
            return response.json();
        })
        .then(data => {
            setDataClases(data);
        })
        .catch(error => {
            console.error('Ha habido un problema con su solicitud:', error);
            Swal.fire({
                title: 'Ha habido un problema con su solicitud',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        });
    }, []);

    const calcularVuelo = e => {
        e.preventDefault();

        if(paisOrigen == 0 || paisDestino == 0 || claseSelect == 0){
            setError(true);
            Swal.fire({
                title: '¡Campos vacios!',
                text: 'Todos los campos son obligatorios',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
            setTotal(0);
            return
        }
        setError(false);

        if(paisOrigen == paisDestino && paisOrigen != 0 && paisDestino != 0){
            setError(true);
            Swal.fire({
                title: '¡Campos iguales!',
                text: 'No puedes elejir dos veces el mismo Pais',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
            setTotal(0);
            return
        }
        setError(false);

        let distanciaEntrePaises = 0;

        let costoDeLaClase = 0;

        let distanciaPaisOrigen = [];
        let idPaisDestino = 0;

        let nombreClaseSelect = "";
        let nombrePaisOrigen = "";
        let nombrePaisDestino = "";

        clases.forEach(clase => {
            if(clase.id == claseSelect){
                costoDeLaClase = clase.costo;
                nombreClaseSelect = clase.nombre
            }
        });
    
        paises.forEach(pais => {
            if(pais.id == paisOrigen){
                distanciaPaisOrigen.push(pais.distancia);
                nombrePaisOrigen = pais.nombre;
            }
            if(pais.id == paisDestino){
                idPaisDestino = pais.id;
                nombrePaisDestino = pais.nombre;
            }
        });

        distanciaPaisOrigen = distanciaPaisOrigen[0];

        distanciaEntrePaises = distanciaPaisOrigen[idPaisDestino];

        const total = cotizar(distanciaEntrePaises, costoDeLaClase, cantidadBoletos);

        if(total > 0){
            Swal.fire({
                title: '¡Cotización exitosa!',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            setTotal(total);

            const currentDate = new Date();

            const formattedDate =
            currentDate.getDate() + '/' +
            (currentDate.getMonth() + 1) + '/' +
            currentDate.getFullYear();

            const registro = {
                "fecha": formattedDate.toString(),
                "pais_origen": nombrePaisOrigen.toString(),
                "pais_destino": nombrePaisDestino.toString(),
                "clase": nombreClaseSelect.toString(),
                "boletos": cantidadBoletos,
                "costo_total": total
            };

            agregarRegistroAlHistorial(registro);
        }
        else{
            Swal.fire({
                title: '¡Cotización sin éxito!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            setTotal(0);
        }

    }
    
    const IncrementarBoletos = () => {
        setCantidadBoletos(cantidadBoletos + 1); 
    };
    
    const DecrementarBoletos = () => {
        if (cantidadBoletos > 1) {
          setCantidadBoletos(cantidadBoletos - 1); 
        }
    };

    return (
        <>
            <form onSubmit={calcularVuelo}>
                <section className={style.column}>
                    <figure className={style.form_historial_icon}>
                        <Link to='/historial'>
                            <img src="\src\img\listaDeVerificacion.png" alt="historial" />
                        </Link>
                    </figure>
                    <section>
                        <label>Pais de Origen</label>
                        <select onChange={(e) => setPaisOrigen(e.target.value)}>
                            <option key="0" value="0">Selecciona un Pais</option>
                            {
                                paises && paises.map((pais) => (
                                    <option key={pais.id} value={pais.id}>{pais.nombre}</option>
                                ))
                            }
                        </select>
                    </section>
                    <section>
                        <label>Pais de Destino</label>
                        <select onChange={(e) => setPaisDestino(e.target.value)}>
                            <option key="0" value="0">Selecciona un Pais</option>
                            {
                                paises && paises.map((pais) => (
                                    <option key={pais.id} value={pais.id}>{pais.nombre}</option>
                                ))
                            }
                        </select>
                    </section>
                    <section>
                        <label>Clase</label>
                        <select onChange={(e) => setClaseSelect(e.target.value)}>
                            <option key="0" value="0">Selecciona una Clase</option>
                            {
                                clases && clases.map((clase) => (
                                    <option key={clase.id} value={clase.id}>{clase.nombre}</option>
                                ))
                            }
                        </select>
                    </section>
                    <section className={style.boletos}>
                        <label>Cantidad de Boletos</label>
                        <ul>
                            <li><input type='button' className={style.botonesBoletos} value='+' onClick={(e) => IncrementarBoletos(e.target.value)}/></li>
                            <li><input type="text" className={style.numberBoletos} min="1" value={cantidadBoletos} readOnly/></li>
                            <li><input type='button' className={style.botonesBoletos} value='-' onClick={(e) => DecrementarBoletos(e.target.value)}/></li>
                        </ul>
                    </section>
                </section>
                <section className={style.btnSubmit}>
                    <input type="submit" value="COTIZAR"/>
                </section>
            </form>
        </>
    );

}
 
export default Form;
