import React, {useState} from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';
import Resultado from './Resultado.jsx';
import style from'/src/Inicio.module.css';

function Inicio() {

  const [paisOrigen, setPaisOrigen] = useState(0);
  const [paisDestino, setPaisDestino] = useState(0);
  const [claseSelect, setClaseSelect] = useState(0);
  const [total, setTotal] = useState(0.00);

  return (
    <>
      <main className={style.mainContainer}>
        <header className={style.header}>
          <Header 
            titulo="Cotizador de Vuelos"
            urlImg="../src/img/avion.png"
            alt="avion"
            style={style}
            />
        </header>
        <section className={style.container}>
          <Form 
            paisOrigen={paisOrigen}
            setPaisOrigen={setPaisOrigen}

            paisDestino={paisDestino}
            setPaisDestino={setPaisDestino}

            claseSelect={claseSelect}
            setClaseSelect={setClaseSelect}

            setTotal={setTotal}
          />
        </section>
        <footer className={style.mensaje}>
          <Resultado total={total}/>
        </footer>
      </main>
    </>
  );
}

export default Inicio
