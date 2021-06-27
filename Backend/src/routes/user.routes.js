import { Router } from "express";
import * as  userController from '../controllers/user.controller';
import {authJwt} from '../middlewares';

const router = Router();

router.get('/listar', userController.listarUsuario);
router.get('/profile', authJwt.verifyToken, userController.getProfile);
router.put('/actualizarUsuario', authJwt.verifyToken, userController.updateProfile);
router.put('/actualizarCupos', authJwt.verifyToken, userController.updateCupos);
router.put('/cuposUsuario',authJwt.verifyToken,userController.updateCuposUsuario);
router.put('/cuposCarpooler',authJwt.verifyToken,userController.updateCuposCarpooler);
router.put('/actualizarReservas', authJwt.verifyToken,userController.updateReservaCliente);
router.put('/actualizarinscribir', authJwt.verifyToken,userController.updateReservaInscribir);
router.put('/reservaSericio', authJwt.verifyToken,userController.reservaServicio);
router.post('/crearReserva', authJwt.verifyToken,userController.nuevaReserva); 
router.post('/crearInscripcion', authJwt.verifyToken,userController.nuevaInscripcion);
router.put('/prueba', authJwt.verifyToken,userController.linkPrueba);
router.get('/buscarReserva', authJwt.verifyToken,userController.buscaReserva);
router.get('/infoReservas', authJwt.verifyToken,userController.informeReserva);
router.get('/infoCuposReservados', authJwt.verifyToken,userController.informeCuposReservados);
router.get('/diasReservas', authJwt.verifyToken,userController.diasReservados);
router.get('/infoReservasCarpooler',authJwt.verifyToken,userController.informeReservasCarpooler);
router.get('/infocarpooling', authJwt.verifyToken,userController.informeCarpooling);
router.get('/eliminar', authJwt.verifyToken,userController.eliminarUsuario);
export default router;