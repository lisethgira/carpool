import { Router } from "express";
import { body, validationResult } from 'express-validator';
import {authJwt} from '../middlewares';
import * as authController from '../controllers/auth.controller';

const router = Router();

router.post('/login', body('email').isEmail(), body('clave').isLength({ min: 4 }), authController.signin) //Login
router.post('/register'/*, authJwt.verifyToken*/, authController.signUp) //Register

export default router;