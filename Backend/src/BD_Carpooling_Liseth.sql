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
   `idinfoReserva` int NOT NULL AUTO_INCREMENT,
  `idUsuario2` int NOT NULL,
  `reserva` int NOT NULL,
  `emailCliente` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`idinfoReserva`),
  KEY `FKidusuario_idx` (`idUsuario2`),
  CONSTRAINT `FKidusuario` FOREIGN KEY (`idUsuario2`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=233 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `inforeserva`
--

INSERT INTO `inforeserva` (`idInfoReserva`, `idUsuario2`, `reserva`, `emailCliente`) VALUES
(1, 2, 50,'tatianazz3@hotmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscribir`
--

DROP TABLE IF EXISTS `inscribir`;
CREATE TABLE IF NOT EXISTS `inscribir` (
  `idinscribir` int NOT NULL AUTO_INCREMENT,
  `idUsuario3` int NOT NULL,
  `cuposReserva` int NOT NULL,
  `inscribir` int NOT NULL,
  `emailCarpooler` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`idinscribir`)
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `inscribir`
--

INSERT INTO `inscribir` (`idInscribir`, `idUsuario3`,`cuposReserva`, `inscribir`, `emailCarpooler`) VALUES
(1, 1, 1, 4,'lisethgiraldo628@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
`idUsuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `apellido` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `telefono` double DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `placaCarro` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `dirOrigen` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `dirDestino` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `horaSalidaOrigen` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `horaSalidaDestino` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `diasServicio` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `documento` double DEFAULT NULL,
  `carpooler` int DEFAULT NULL,
  `clave` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `foto` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `total` int DEFAULT NULL,
  `cupos` int DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
  ) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
--
-- Volcado de datos para la tabla `usuario`
--
INSERT INTO `usuario` (`idUsuario`, `nombre`, `apellido`, `telefono`,`email`, `placaCarro`, `dirOrigen`, `dirDestino`, `horaSalidaOrigen`, `horaSalidaDestino`, `diasServicio`,`documento`, `carpooler`, `clave`, `foto`, `total`,`cupos`) VALUES
(1, 'Liseth Arelis', 'Giraldo Morales', 3105142774, 'Lisethgiraldo628@gmail.com', 'MDS345', 'Calle 51D #59A-44', 'Cra 52 #105-23', '05:00', '06:00','lunes-martes', 1036965346, 23, '12345', 'https://image.freepik.com/vector-gratis/diseno-ilustracion-vector-personaje-avatar-mujer-joven_24877-18520.jpg', 20000,4),
(2, 'Luz Tatiana', 'Zapata', 3135151617, 'tatianazz3@hotmail.com', 'MAD374', 'Calle 51 D 20 50', 'Cr 84 35 110', '07:00', '07:15','lunes-martes-miercoles', 43929489, 25, '12345', 'https://image.freepik.com/vector-gratis/diseno-ilustracion-vector-personaje-avatar-mujer-joven_24877-18536.jpg', 6000,4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/* busca reserva por usuario  */
select nombre, apellido, telefono, dirOrigen, dirDestino from inforeserva inner join usuario on usuario.idUsuario = inforeserva.idUsuario2;

/* ver las inscripciones de vehiculos */
select nombre, apellido, telefono, dirOrigen, dirDestino, placaCarro from inscribir inner join usuario on usuario.idUsuario = inscribir.idUsuario3;

