Carpooling

El trasnporte de vehículo compartido también conocido por los términos en inglés carpool o carpooling​ es la práctica que consiste en compartir un automóvil con otras personas para viajes periódicos. Con esta práctica se pretende reducir la congestión de tránsito en las grandes ciudades así como facilitar los desplazamientos a personas que no dispongan de coche propio. Además, supone una notable disminución de emisiones de CO2, al reducir el número de coches en las carreteras. A su vez, favorece las relaciones sociales entre personas que realizan los mismos recorridos.

en el carpooling un usuario puede ser carpooler y usuario al mismo tiempo,pagar en efectivo al conductor, tener contacto directo entre carpooler y cliente
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Pre-requisitos

Debes tener instalado.

Node:  14.17.0
React: 17.0.1
  
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Para hacer la instalación de NodeJS dirjase a la fuente oficial
https://nodejs.org/es/

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
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Comenzando


para comenzar a probar el aplicativo se recomienda ir al repositorio:

Clonar el repositorio en el siguiente enlace: https://github.com/lisethgira/carpool.

Instalacion

en la carpeta Frontend abrimos una consola y pondremos los siguientes comandos.

para instalar librerias requeridas:

npm install

ejecutar el servidor mediante:

npm run start

en la carpeta Backend abrimos una consola y pondremos los siguientes comandos.

para instalar librerias requeridas:

npm install.

ejecutar el servidor mediante:

npm run dev

node index.js ---no esta funcional---

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

|             :--funcionamiento--:                                                                               |
| :---           |     :---                                                                                      |        
| hacer login    | 1. al hacer el login me redirecciona  al dashboard ✓
                   2. al hacer login en el dashboard me debe mostrar los carpoolers disponibles 
                   3. al hacer el login en el navbar me debe decir quien esta logueado con nombre apellido y foto
	               4. al hacer el login en la vista perfil usuario me debe cargar la informcion del usuario                                                                                        |
| hacer registro | 1.al hacer el registro la pagina me redirecciona al login  y guarda el usuario en la base de
                   datos✓                                                                                         |
|:--si el usuario esta logueado podrá:--:                                                                         |
| editar perfil  | 1.el usuario  podra modificar sus datos de perfil y actualizarlos en el target de perfil       |
| publicar ruta  | 1. cambiar el rol de carpooler a usuario desactivara los inputs de la reserva y habilitara la vista 
                   de carpoolers disponibles para que pueda hacer una reserva
                   2. cambiar el rol de usuario a carpooler desactivara la vista de carpoolers disponibles y 
                   habilitara los inputs para crear un reserva
		           3. para crear direcciones se necesita hacer uso de maps de google y abrir un modal donde busca el punto
                   de origen y el punto de destino
                   4. al esoger los dias de servicio podra escogerlos mediante un modal que muestre los 7 dias y seleccionar en cuales hara la ruta
                   5. guardar hora de salida y hora de llegada
                   6.guardar precio 
                   7. guardar placa vehiculo
                   8. crear reserva                                                                                |
|||
Funcionamiento

Usuario
Ver Carpooler: los usuarios al iniciar sesion veran la vista principal, en esta seccion apareceran los carpooler que tengan cupos disponibles.

Buscar Carpoolers: En la pagina principal veras una barra de busqueda donde podras filtrar los carpoolers por la direccion que desees.

Reservar: Cuando encuentra el carpooler que necesitas veras el boton de reservar en la parte inferior, das clic y se despliega un recuadro donde pondras cuantos cupos necesitas y das clic en guardar.

Ver reservas: Cuando reservas iras a la tabla de reservas, ahi veras la informacion del carpooler que reservaste y un enlace directo al whatsapp en caso de que quieras tener contacto directo a el.

Cancelar reserva: en la tabla de reservas veras el boton de cancelar reserva en caso de que no requieras ya del servicio.

Cambiar mis datos personales: en la parte superior izquierda veras el campo Cuenta, podras cambiar tus datos personales, das clic en actualiar para guardar los cambios.

Actualizar mi direccion, hora u ofrecer un servicio:

en la pertaña de servicios veras los campos de direccion y un boton de modificar direccion, al dar clic saldra un recuadro donde podraas escribir la direccion donde estas y a la que iras, calcular la ruta a seguir y cuando des clic en gurdar cambiaras tu direccion.
Podras modificar en los campos de hora tanto la hora de salida de tu casa al igual que la del trabajo.
al darle clic en actualziar cambiras tus datos. Cambiar de rol: Si en algun momento se requiere ser carpooler, en la pestaña de servicios deberas dar clic en el boton "si" en la seccion ¿quieres ser carpooler? y automaticamente podras agregar:
la placa del vehiculo.
los cupos disponibles.
el valor del viaje.
los dias que ofreceras el servicio mediante un recuadro podras seleccionarlos uno a uno.
al darle clic en actualziar cambiras tus datos y/o rol.
Carpooler
Ver reservas: si eres carpooler e inicias sesion, automaticamente iras a la pestaña de reservas para ver quienes han reservado tu servicio, veras cuantos cupos te han reservado cada uno, los datos completos del usuario y el boton a whatsapp en caso de que quieras tener contacto directo a ellos.

Si eres carpooler no podras resevar otro carpooler hasta que cambies de rol a usuario.

Cambiar de rol: Si en algun momento ya no quieres ser carpooler sino que quieres alquilar uno de los servicios que se ofrecen solo debes:

ir a la pestaña de reservas y deberas dar clic en el boton "No" en la seccion ¿quieres ser carpooler?
al darle clic en actualziar cambiras tu rol.
Cambiar mis datos personales: en la parte superior izquierda veras el campo Cuenta, podras cambiar tus datos personales, das clic en actualiar para guardar los cambios.

NOTA:
Si en algun momento los estilos o el mapa no muestra tu hubicacion actualiza la pagina.

Usuarios para comenzar a usar la app
todos estos usuarios podran ser carpoolers y usuarios, dentro la app podras cambiar el rol como mejor te parezca, aca un listado de los usuarios registrados hasta el momento aunque tambien podras registrar uno nuevo desde la pagina de login.

Usuario 1:

email: am@gmail.com
clave: kaia123
Usuario 2:

email: ep@gmail.com
clave: 1234
Usuario 3:

email: nata@gmail.com
clave: 1234
Usuario 4:

email: sebas@gmail.com
clave: 1234
Usuario 5:

email: sara@gmail.com
clave: 1234
Usuario 6:

email: tati@gmail.com
clave: 1234
Usuario 7:

email: rafo@gmail.com
clave: 1234
Construido con
frotnEnd Angular CLI: 12.0.0.
backend Node: 14.17.0 con la libreria de ExpressJS.
Mapas se uso la libreria ngui-map usada en Angular.
Base de Datos se uso Mysql mediante el cliente en la nube clever-cloud.com.
Versionado
la aplicacion fue construida en linux mediante la distribucion ubunto 18.04.4 LTS y fue probada exitosamente en el sistema operativo windows 10 sin ninguna dificultad.

puedes usar navegadores con soporte de javaScript como:

opera.
Chrome.
mozilla.
edge.
epiphany.
chromium.
Autor
Alejandro Monyoya gaviria
Quiero agradecer a cesde y digital School por la oportunidad de etudiar con ellos, cambiar y expandir mis horizontes, tambien a MVM ingenieria de software por el apoyo economico en todo este tiempo de estudio y la confiaza puesta en mi, a Jose Rafael Arrieta Dominguez quien fue mi tutor en la construccion de este proyecto y del cual aprendi muchas cosas.