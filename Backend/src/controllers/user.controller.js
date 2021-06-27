import { request } from "express";
import User from '../models/user.model'

export const listarUsuario =(req,res) =>{
    User.getAll((err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al obtener los usuarios.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: userData
            });
        }
    }); 
}

//Obtiene Datos
export const getProfile = (req, res) => {
    console.log(req.customer);
    if (req.customer == null || req.customer == undefined) req.json.status(400).send({
        message: "No se pudo obtener la informacion",
        data: null,
    });
    res.status(200).send({
        message: null,
        data: 
            req.customer
    });
}

//Setea Datos
export const updateProfile = (req, res) => {
    if (req.customer == null || req.customer == undefined) req.json.status(400).send({
        message: "No se pudo obtener la informacion",
        data: null,
    });

    User.update(req.body, req.customer.idUsuario, (err, userData) => {
            if (err) {
                res.status(400).send({
                    message: err.message || "se produjo un error al actualizar el usuario.",
                    data: null,
                });   
            }
            else {
                res.status(200).send({
                    message: null,
                    data: req.body
                });
            }
        });
}

//actualizar cupos del carpooler 
export const updateCupos = (req, res) => {
    
    if (req.customer == null || req.customer == undefined) req.json.status(400).send({
        message: "No se pudo obtener la informacion",
        data: null,
    });

    const {cupos, email} = req.body;

    User.updateCupos(cupos, email, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: req.body
            });
        }
    }); 
}

//actualizar cupos del usuario
export const updateCuposUsuario = (req, res) =>{
    const {idUsuario3, cuposReserva, emailCarpooler} = req.body;
    User.updateInscribir(idUsuario3, cuposReserva, emailCarpooler, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: req.body
            });
        }
    });
}

// actualiza cupos del carpooler

export const updateCuposCarpooler = (req, res) => {
    const {emailCarpooler, cuposCancelar} = req.body;
    User.updateCuposCarpooler(emailCarpooler, cuposCancelar, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: req.body
            });
        }
    });
}

// elimina la reserva del cliente /////

export const updateReservaCliente = (req, res) => {
    const {reserva, emailCliente, idUsuario2} = req.body;
    if (reserva == 0) res.status(400).send({
        message: err.message || "se produjo un error al actualizar el usuario.",
        data: null,
    });
    else {
        User.updateReserva(reserva, emailCliente, idUsuario2, (err, userData) => {
            if (err) {
                res.status(400).send({
                    message: err.message || "se produjo un error al actualizar los datos del cliente en la reserva.",
                    data: null,
                });   
            }
            else {
                res.status(200).send({
                    message: null,
                    data: req.body
                });
            }
        });
    }
}

// elimina la reserva de la inscripcion  ///// //////////////////////////   este hay que modificarlo para que lea el id

export const updateReservaInscribir = (req, res) => {
    const {inscribir, emailCarpooler} = req.body;

    if (inscribir == 0) res.status(400).send({
        message: err.message || "se produjo un error al actualizar la inscripcón.",
        data: null,
    });
    else {
        User.updateReservaInscribir(inscribir, emailCarpooler, (err, userData) => {
            if (err) {
                res.status(400).send({
                    message: err.message || "se produjo un error al actualizar el usuario.",
                    data: null,
                });   
            }
            else {
                res.status(200).send({
                    message: null,
                    data: req.body
                });
            }
        });
    }
}


// reservar servicio /////

export const reservaServicio = (req, res) => {

    const reserva = req.body.reserva;
    const emailCliente = req.body.emailCliente;
    if (reserva == 0) res.status(400).send({
        message: err.message || "se produjo un error al actualizar el usuario.",
        data: null,
    });
    else {
        User.reservaServicio(reserva, emailCliente, (err, userData) => {
            if (err) {
                res.status(400).send({
                    message: err.message || "se produjo un error al actualizar el usuario.",
                    data: null,
                });   
            }
            else {
                res.status(200).send({
                    message: null,
                    data: req.body
                });
            }
        });
    }
 //   res.send(datos);
}

// crear una nueva inscripcion e informacion en la reserva /////
export const nuevaReserva = (req, res) => {
    const {reserva, emailCliente, idUsuario2} = req.body;
    User.nuevaReserva(reserva, emailCliente, idUsuario2, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: req.body
            });
        }
    });
}

export const nuevaInscripcion = (req, res) => {
    const {inscribir, idUsuario3, emailCarpooler, cuposReserva} = req.body;
    User.nuevaInscripcion(inscribir, idUsuario3, emailCarpooler, cuposReserva, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: req.body
            });
        }
    });
}

////// link de prueba ///////
export const linkPrueba = (req, res) => {
    const {email, dirOrigen} = req.body;
    User.linkPrueba(email, dirOrigen, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: req.body
            });
        }
    });
}


// buscar reservas hechas
///  ver informacion de reservas ////
export const buscaReserva = (req, res) => {
    const {idUsuario3, emailCarpooler, inscribir} = req.query;
    User.buscaReserva(idUsuario3, emailCarpooler, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: userData
            });
        }
    });
}


///  ver informacion de reservas ////
export const informeReserva = (req, res) => {
    const {reserva, email} = req.query;
    User.informeReserva(reserva, email, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: userData
            });
        }
    }); 
}


// informacion de los cupos resvados ////
export const informeCuposReservados = (req, res) => {
    const {idUsuario3, inscribir} = req.query;
    User.informeCuposReservados(idUsuario3, inscribir, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: userData
            });
        }
    });  
}
 
///  Dias de reserva que hace el usuario ////
export const diasReservados = (req, res) => {
    const {inscribir, idUsuario3} = req.query;
    User.diasReservados(inscribir, idUsuario3, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: userData
            });
        }
    });
}


export const informeReservasCarpooler = (req, res) => {
    const {inscribir, email} = req.query;
    User.informeReservasCarpooler(inscribir, email, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: userData
            });
        }
    });
}

///  ver informacion de carpooling ////
export const informeCarpooling =(req, res) => {

    const carpooler = req.query.carpooler;
    const email = req.query.email;
    const cupos = req.query.cupos;

    User.informeCarpooling(carpooler, email, cupos, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: userData
            });
        }
    }); 
}


// elliminar usuario ///
export const eliminarUsuario = (req, res) => {

    const email = req.query.email;

    User.Delete(email, (err, userData) => {
        if (err) {
            res.status(400).send({
                message: err.message || "se produjo un error al actualizar el usuario.",
                data: null,
            });   
        }
        else {
            res.status(200).send({
                message: null,
                data: userData
            });
        }
    });

}

