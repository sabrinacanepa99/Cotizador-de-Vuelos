--El siguiente proyecto esta hecho con Vite y React--

--devDependencies--
Version de vite: "^5.0.0"

--Dependencias instaladas por Vite--
react: "^18.2.0"
react-dom: "^18.2.0"

--Dependencias instaladas--
react-router-dom: "^6.20.1"
sweetalert2: "^11.10.1"

React Router Dom es una biblioteca de enrutamiento diseñada para aplicaciones web que utilizan React. Proporciona herramientas que permiten la navegación entre diferentes componentes de la aplicación mientras mantiene la sincronización de la interfaz de usuario con la URL del navegador.

Sweetaler2 es una biblioteca que mejora de manera visual los cuadros de dialogo Web.

--Instrucciones de uso--
Sitúate en la carpeta raiz del proyecto, abre cmd con esa ruta y escribe 'npm run dev'. 
Se ejecutara el servidor en el localhost:5173 o localhost:3000

--App.jsx--

Importaciones:
Se importa React y los componentes necesarios de React Router Dom para configurar el enrutamiento en la aplicación.

Configuración del enrutado:
Utiliza el componente <Router> para envolver toda la aplicación. Este componente proporciona el contexto para el enrutamiento. Dentro del <Router>, se usa el componente <Routes> para contener y definir las diferentes rutas de la aplicación. Cada <Route> representa una ruta específica de la aplicación, 'path' define la URL correspondiente a la ruta,
'element' especifica el componente que se renderizará cuando la URL coincida con la ruta definida.

--Components Inicio.jsx--

El componente Inicio importa otros componentes necesarios: Header, Form y Resultado, así como los estilos definidos en Inicio.module.css.

Se utilizan Hooks useState para definir y gestionar el estado local del componente. Se crean cuatro estados: paisOrigen, paisDestino, claseSelect y total. Estos mantienen la información seleccionada por el usuario y el resultado del cálculo en el componente.

--Components Historial.jsx--

Se importan los componentes necesarios para la página Historial: Header y ListarHistorial. Además, se importan los estilos definidos en Historial.module.css.

Este componente epresenta la página de historial de cotizaciones.

--Components Header.jsx--

Importa el componente Link de react-router-dom. Link se usa para crear enlaces en la aplicación React Router.

Toma como argumento un objeto destructurado de propiedades: titulo, urlImg, alt, y style.

Utiliza un componente Link de React Router para crear un enlace que dirige a la ruta raíz (to="/") de la aplicación.
Dentro del enlace (Link), se encuentra una etiqueta <img> que muestra una imagen cuya URL se pasa como prop (urlImg) y su texto alternativo (alt).

--Components Form.jsx--

Es un componente que recibe propiedades como paisOrigen, setPaisOrigen, paisDestino, setPaisDestino, setTotal, claseSelect, y setClaseSelect.

Utiliza useState para manejar estados locales como cantidadBoletos (representa la cantidad de boletos seleccionados) y error (para manejar los errores).

Utiliza useEffect para realizar llamadas a APIs externas (paises.json y clases.json) al montar el componente y obtener datos de países y clases. Maneja posibles errores con mensajes de alerta utilizando SweetAlert2.

Función calcularVuelo: Se ejecuta al enviar el formulario y realiza las validaciones necesarias (como campos vacíos y países iguales), calcula el costo del vuelo utilizando datos obtenidos, y actualiza el estado total. También registra la cotización en el historial.

Funciones IncrementarBoletos y DecrementarBoletos: Manejan el incremento y decremento de la cantidad de boletos seleccionados.

Renderiza un formulario con campos de selección para país de origen, país de destino, clase y cantidad de boletos. Utiliza el componente Link para redireccionar al historial de cotizaciones cuando se hace clic en una imagen. Asimismo, maneja eventos de cambio en los selectores y muestra mensajes de alerta en caso de errores durante la cotización.

--Components Resultado.jsx--

Es un componente que recibe una propiedad llamada total.

Se utiliza interpolación de cadenas (${total}) para mostrar dinámicamente el valor de total en el texto del encabezado.

Esta propiedad se utiliza para mostrar el resultado de la cotización de vuelos en el componente. El valor de total se muestra en el componente Resultado como el resultado de la operación de cálculo de la cotización.

--Components ListaHistorial.jsx--

Es un componente que no recibe propiedades.

Utiliza el hook useState para mantener el estado local del historial de cotizaciones.

El código utiliza el localStorage para almacenar y recuperar registros de historial de cotizaciones en el navegador. Los datos se almacenan como objetos JSON en el localStorage y luego se recuperan y muestran en el componente.

Utiliza el hook useEffect para realizar una operación al cargar el componente. En este caso, lee los registros almacenados en el localStorage, los parsea y los almacena en el estado historial.

--JavaScript cotizar.js--

Recibe tres parámetros: distanciaEntrePaises, costoDeLaClase y cantidadBoletos. Esta función calcula el costo total de la cotización de vuelos basándose en estos parámetros.

--JavaScript historial.js--

Se encarga de agregar un nuevo registro al historial almacenado en el localStorage del navegador.