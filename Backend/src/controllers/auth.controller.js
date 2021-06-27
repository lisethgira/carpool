import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../models/user.model'
import config from '../config';

//crear nuevo usuario 
export const signUp = async (req, res) => {
    
    //tabla user
   /* const {nombre, apellido, whatsapp,documento, telefono, email, clave, placaCarro,
        dirOrigen, dirDestino, horaSalidaOrigen, horaSalidaDestino, diasServicio, carpooler, foto,
        total, cupos} = req.body;*/
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const documento = req.body.documento;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const clave = req.body.clave;

    //Buscar Si existe Email
    const userFound = await User.findByEmail({email});
    console.log(userFound);
    if(userFound) return res.status(400).send({
        message: "Ya existe un usuario con ese correo electronico",
        data: null,
    });

    // Create a Customer
    const newUser = new User({nombre,
        apellido,
        telefono,
        email,
        documento,
        clave: await User.encryptPassword(clave),
        foto,
    });

    User.create(newUser, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al crear el usuario.",
                data: null,
            });   
        }
        else {
            const token = jwt.sign({idUsuario: userData.idUsuario}, config.secrectKey, {
                expiresIn: 86400, //24 Horas
            });
            res.status(200).send({
                message: null,
                data: {
                    token, ...userData
                }
            });
        }
    });    
}


export const signin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
          errors: errors.array(),
          data: null
        });
    }

    const {email, clave} = req.body;
    const userFound = await User.findByEmail({email});
    if(!userFound) return res.status(400).send({
        message: "el usuario no ha sido encontrado",
        data: null,
    });

    const matchPassword = await User.comparePassword(clave, userFound.clave);

    if(!matchPassword) return res.status(400).send({
        message: "Credenciales invalidas",
        data: null,
    });

    const token = jwt.sign({idUsuario: userFound.idUsuario}, config.secrectKey, {
        expiresIn: 86400, //24 Horas
    });
    return res.status(200).send({
        message: null,
        data: {
            token, ...userFound
        }
    });
}