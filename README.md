RETO DIGITAL SCHOOL 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CHOUCAIR TESTING S.A. 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
LISETH ARELIS GIRALDO MORALES 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
APLICACION WEB CARPOOL
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
El trasnporte de vehículo compartido también conocido por los términos en inglés carpool o carpooling​ es la práctica que consiste en compartir un automóvil con otras personas para viajes periódicos. Con esta práctica se pretende reducir la congestión de tránsito en las grandes ciudades así como facilitar los desplazamientos a personas que no dispongan de coche propio. Además, supone una notable disminución de emisiones de CO2, al reducir el número de coches en las carreteras. A su vez, favorece las relaciones sociales entre personas que realizan los mismos recorridos.

en el carpooling un usuario puede ser carpooler y usuario al mismo tiempo,pagar en efectivo al conductor o tener contacto directo entre carpooler y cliente


## Table of Contents

* [PreRequistos](#PreRequisitos)
* [Instalación de PreRequisitos](#Instalacion-de-PreRequisitos)
* [Iniciar Aplicativo](#Iniciar-Aplicativo)
* [Instalción en Consola](#Instalacion-en-Consola)
* [Funcionamiento](#Funcionamiento)
* [Usuarios en la app](#Usuarios-en-la-app)
* [Tecnologías](#Tecnologias)
* [Versionamiento](#Versionamiento)
* [Agradecimientos](#Agradecimientos)
* [Useful Links](#useful-links)

## PreRequisitos
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Debes tener instalado.

Node:  14.17.0
React.js: 17.0.1
  

## Instalación de PreRequisitos
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Para hacer la instalación de NodeJS dirijase a la fuente oficial

https://nodejs.org/es/

para hacer la instalacón de expressjs dirijase a la fuente oficial

https://expressjs.com/


Para hacer la instalación de ReactJS vamos a seguir estos sencillos pasos:

Paso 1. Instalar NodeJS en su ultima versión si aun no lo tienes instalado, para eso entraremos a su web oficial y descargaremos el instalador más actualizado https://nodejs.org/es/

Paso 2. Actualizar NPM, el gestor de paquetes de node, para bajarnos las dependencias más actuales:

npm install -g npm@latest

Paso 3. Borrar la cache de NPM:

npm cache clean --force

Paso 4. Instalar Create React App, que es un interprete de consola(CLI) que nos va a permitir instalar React facilmente e incluirá webpack para la compilación y minificación del proyecto, un live reload, una estructura básica para los proyectos de ReactJS, etc, veamos como instalar este paquete:

npm install -g create-react-app

Ahora ya esta instalado «create react app» y se puede generar un nuevo proyecto de React.js

Para generar un nuevo proyecto de React.js y finalmente instalarlo, entraremos al directorio donde queramos generar el proyecto de reactjs y ejecutamos este comando:

npx create-react-app NombreDeMiProyecto

Ahora entraremos al directorio de nuestro proyecto y lanzaremos el servidor local de pruebas para React:

cd NombreDeMiProyecto
npm start

se puede comprobar la versión de React que tiene el repositorio dentro del fichero package.json.

Ahora se tiene disponible la webapp de React 16 en http://localhost:3000/ y se verá el proyecto corriendo, con la página de bienvenida por defecto.

Con esto ya conoces como instalar React desde cero y como generar un proyecto base.

o dirijase a la fuente oficial de React js

https://reactjs.org/

 para hacer la instalción con redux dirijase a la fuente oficial

 https://redux.js.org/introduction/getting-started

## Iniciar Aplicativo
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

para comenzar a probar el aplicativo se recomienda ir al repositorio:

Clonar el repositorio en el siguiente enlace: https://github.com/lisethgira/carpool.


## Instalación  en consola
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

en la carpeta Frontend abrimos una consola y pondremos los siguientes comandos.

para instalar librerias requeridas:

npm install

para que el frontend se conecte con el backend dirigete al apartado src/services/config.js y cambia la direccion ip por la de tu maquina 

apiUrl = 'http://192.168.1.9:5000'

ejecutar el servidor mediante:

npm run start

se abrira en el puerto http://localhost:3000/auth/login

en la carpeta Backend abrimos una consola y pondremos los siguientes comandos.

para instalar librerias requeridas:

npm install.

ejecutar el servidor mediante:

npm run dev

node index.js ---no esta funcional---

se abrirá en el puerto 5000


## Funcionamiento                                                                             
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Las funciones que esten chuliadas ya se encuentran terminadas y funcionando en el aplicativo, las demas son tareas por cumplir.

     hacer login : 1. al hacer el login me redirecciona  al dashboard ✓
                   2. al hacer login en el dashboard me debe mostrar los carpoolers disponibles 
                   3. al hacer el login en el navbar me debe decir quien esta logueado con nombre apellido y foto✓
	                 4. al hacer el login en la vista perfil usuario me debe cargar la información del usuario  ✓ 

  hacer registro : 1.al hacer el registro este me redirecciona al login  y guarda el usuario en la base de
                   datos✓  

si el usuario esta logueado podrá:

  editar perfil  : 1.el usuario  podra modificar sus datos de perfil y actualizarlos en el target de perfil  ✓

  publicar ruta  : 1. cambiar el rol de carpooler a usuario desactivara los inputs de la reserva y habilitara la vista 
                   de carpoolers disponibles para que pueda hacer una reserva
                   2. cambiar el rol de usuario a carpooler desactivara la vista de carpoolers disponibles y 
                   habilitara los inputs para crear un reserva
		               3. para crear direcciones se necesita hacer uso de maps de google y abrir un modal donde busca el punto
                   de origen y el punto de destino
                   4. al esoger los dias de servicio podra escogerlos mediante un modal que muestre los 7 dias y seleccionar en cuales hara la ruta
                   5. guardar hora de salida y hora de llegada
                   6. guardar precio 
                   7. guardar placa vehiculo
                   8. crear reserva     

 listar reservas : 1. tanto el carpooler como el usuario  pueden ver el listado de reservas donde aparecera el
		           enlace de contacto a whatsaap 
                   2. en el caso del usuario los datos del viaje cupos disponibles precio nombre carpooler 
                   documento telfono whatsapp carpooler 
                   3. en el caso del carpooler nombre usuario telefono documento whatsapp

buscar  reserva :  1. en la pantalla de carpool verá los carpooler disponibles
                   2. en el buscador podra buscar coincidencias por cercania de ruta
                   3. podra hacer reserva del carpool si los asientos estan disponibles 
                   4. podra escribir cuantos asientos ocupar
                   5. hacer reserva, este lo redireccionara al listado de reservas                                                                     

   hacer logout :  1. cerrar sesión y hacer que expire el token ✓

## Usuarios registrados en la app
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
todos estos usuarios podran ser carpoolers y usuarios, dentro la app podras cambiar el rol como mejor te parezca, aca un listado de los usuarios registrados hasta el momento aunque tambien podras registrar uno nuevo desde la pagina de login.

Usuario 1:

email: hola2@gmail.com
clave: 12345

Usuario 2:

email: prueba2@gmail.com
clave: 12345

## Tecnologias Usadas
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Este repositorio cuenta con un servidor y un cliente los cuales fueron construidos con las siguientes tecnologías:

![estructura](https://github.com/lisethgira/ImagenesCarpool/blob/main/WhatsApp%20Image%202021-06-30%20at%208.18.32%20AM.jpeg)

FROTNEND

-React.js: V.17.0.1
-Redux: V.4.1.0

BACKEND

-Node: 14.17.0 con la libreria de ExpressJS.
-Mapas: se uso la libreria react-google-maps usada en Reactjs.

BASE DE DATOS

-Mysql: mediante Workbench (es una herramienta visual de diseño de bases de datos que integra desarrollo de software, administración de bases de datos, diseño de bases de datos, gestión y mantenimiento para el sistema de base de datos MySQL) conectado al servidor de bases de datos en la nube clever-cloud.com.

datos para la conexión a la base de datos 

host:  'bawdkc5uydt2x70ujxbp-mysql.services.clever-cloud.com'
user:  'uhyznnycbl5pbww7'
password:  'LR4qc07c6LtKiHgjrnE0'
database:  'bawdkc5uydt2x70ujxbp'


## Versionado
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
la aplicación fue construida y probada en el sistema operativo windows 10 sin ninguna dificultad, mediante el editor de código de Visual Studio Code.

puedes usar navegadores con soporte de javaScript como:

opera.
Chrome.
mozilla.
edge.
epiphany.
chromium.

## Agradecimientos
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Agradecemientos a Cesde, tambien a Digital School por la oportunidad que brindaron a este grupo selecto de 13 estudiantes permitiendonos cambiar y expandirnos a nuevos conocimientos, a  la empresa Chouqueir Testing S.A por el apoyo economico en todo este tiempo de estudio y la confiaza que han depositado para que pudiese llevar este proceso, a Jose Rafael Arrieta Dominguez quien fue el tutor asignado durante esta ruta de aprendizaje y gran ayuda en la construcción de este proyecto y del cual me llevo  grandes aprendizajes; a el equipo de apoyo que conforme durante este largo año y que sin importar la distancia siempre estuvo cuando lo necesite Tatiana Zapata, Sebastian Llano, Alejandro Montoya dentro del ambito academico y fuera de él a Peter Herrera,Moises Guerra.

A todos ellos Muchas Gracias.