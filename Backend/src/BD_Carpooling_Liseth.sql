use bd_carpooling_liseth;
-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 06-05-2021 a las 18:03:17
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_carpooling_liseth`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inforeserva`
--

DROP TABLE IF EXISTS `inforeserva`;
CREATE TABLE IF NOT EXISTS `inforeserva` (
  `idInfoReserva` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario2` int(11) NOT NULL,
  `reserva` int(11) NOT NULL,
  `telefonoCliente` double NOT NULL,
  `whatsappCliente`varchar (100) NOT NULL,
  `emailCliente` varchar(100) NOT NULL,
  PRIMARY KEY (`idInfoReserva`),
  UNIQUE KEY `idInfoReserva` (`idInfoReserva`),
  KEY `aliasIdUsuario2` (`idUsuario2`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `inforeserva`
--

INSERT INTO `inforeserva` (`idInfoReserva`, `idUsuario2`, `reserva`,`telefonoCliente`,`whatsappCliente`, `emailCliente`) VALUES
(1, 2, 50,313515617,'https://wa.link/6c5rz2','tatianazz3@hotmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscribir`
--

DROP TABLE IF EXISTS `inscribir`;
CREATE TABLE IF NOT EXISTS `inscribir` (
  `idInscribir` int(11) NOT NULL AUTO_INCREMENT,
  `idReserva` int(11) DEFAULT NULL,
  `idUsuario3` int(11) NOT NULL,
  `inscribir` int(11) NOT NULL,
  `telefonoCarpooler` double NOT NULL,
  `whatsappCarpooler`varchar (100) NOT NULL,
  `emailCarpooler` varchar(100) NOT NULL,
  `cuposReserva` int (4) NOT NULL,
  PRIMARY KEY (`idInscribir`),
  UNIQUE KEY `idInscribir` (`idInscribir`),
  KEY `aliasIdUsuario3` (`idUsuario3`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;


--
-- Volcado de datos para la tabla `inscribir`
--

INSERT INTO `inscribir` (`idInscribir`, `idReserva`, `idUsuario3`, `inscribir`, `telefonoCarpooler`,`whatsappCarpooler`, `emailCarpooler`) VALUES
(1, NULL, 1, 1, 3105142774,'https://wa.link/bvrr35','lisethgiraldo628@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `apellido` varchar(25) NOT NULL,
  `telefono` double NOT NULL,
  `whatsapp`varchar (100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `placaCarro` varchar(6) DEFAULT NULL,
  `dirOrigen` varchar(100) NOT NULL,
  `dirDestino` varchar(100) NOT NULL,
  `horaSalidaOrigen` varchar(10) NOT NULL,
  `horaSalidaDestino` varchar(10) NOT NULL,
  `diasServicio`varchar(100)NOT NULL,
  `documento` double NOT NULL,
  `carpooler` int(11) NOT NULL,
  `clave` varchar(10) NOT NULL,
  `foto` varchar(400) NOT NULL,
  `total` int(11) NOT NULL,
  `cupos`int(4)NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `idUsuario` (`idUsuario`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombre`, `apellido`, `telefono`, `whatsapp`,`email`, `placaCarro`, `dirOrigen`, `dirDestino`, `horaSalidaOrigen`, `horaSalidaDestino`, `diasServicio`,`documento`, `carpooler`, `clave`, `foto`, `total`,`cupos`) VALUES
(1, 'Liseth Arelis', 'Giraldo Morales', 3105142774,'https://wa.link/bvrr35', 'Lisethgiraldo628@gmail.com', 'MDS345', 'Calle 51D #59A-44', 'Cra 52 #105-23', '05:00 pm', '06:00 pm','lunes-martes', 1036965346, 23, '12345', 'https://image.freepik.com/vector-gratis/diseno-ilustracion-vector-personaje-avatar-mujer-joven_24877-18520.jpg', 20000,4),
(2, 'Luz Tatiana', 'Zapata', 3135151617,'https://wa.link/6c5rz2', 'tatianazz3@hotmail.com', 'MAD374', 'Calle 51 D 20 50', 'Cr 84 35 110', '07:00 am', '07:15am','lunes-martes-miercoles', 43929489, 25, '12345', 'https://image.freepik.com/vector-gratis/diseno-ilustracion-vector-personaje-avatar-mujer-joven_24877-18536.jpg', 6000,4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/* busca reserva por usuario  */
select nombre, apellido, telefono, dirOrigen, dirDestino from inforeserva inner join usuario on usuario.idUsuario = inforeserva.idUsuario2;

/* ver las inscripciones de vehiculos */
select nombre, apellido, telefono, dirOrigen, dirDestino, placaCarro from inscribir inner join usuario on usuario.idUsuario = inscribir.idUsuario3;

