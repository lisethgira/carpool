import { request } from "express";
import User from '../models/user.model'

export const createUser = (req, res) => {
    res.json("Ok");
}
export const listarUsuario =(req,res) =>{
    conexion.query('SELECT * FROM usuario' , async (error, results, fields) => {
        
        if (error)
        throw error;

    results.forEach(results => {
        console.log(results);

    });

    res.send(results)

    })    
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

// actualizar dirección

export const updateDirection = (req, res) => {
    const email = req.body.email;
    const whatsapp = req.body.whatsapp;
    const dirOrigen = req.body.dirOrigen;
    const dirDestino = req.body.dirDestino;
    const horaSalidaDestino = req.body.horaSalidaDestino;
    const horaSalidaOrigen = req.body.horaSalidaOrigen;
    const placaCarro = req.body.placaCarro;
    const carpooler = req.body.carpooler;
    const diasServicio = req.body.diasServicio;
    const total = req.body.total;
    const cupos = req.body.cupos;

    const datos = [{dirOrigen,
        email,
        whatsapp,
        dirDestino,
        horaSalidaOrigen,
        horaSalidaDestino, 
        placaCarro,
        cupos,
        carpooler,
        total,
        diasServicio}];

        let respuesta;

        if (dirDestino==='' || dirOrigen==='' || horaSalidaDestino==='' || horaSalidaOrigen==='') {
            respuesta = "0"
            res.send(respuesta);  
            console.log(respuesta)
        } else {

          /*  conexion.query('UPDATE usuario SET dirOrigen="'+dirOrigen+'", dirDestino="'+dirDestino+'", horaSalidaOrigen="'+horaSalidaOrigen+'", horaSalidaDestino="'+horaSalidaDestino+'", placaCarro="'+placaCarro+'", carpooler="'+carpooler+'", total="'+total+'", diasServicio="'+diasServicio+'" WHERE email="'+email+'"', async (error, results) => {

            console.log('Actualizacion exitosa')
            respuesta = "1"
            res.send(results);  
            console.log(results)
        }) */


        conexion.query('UPDATE usuario SET dirOrigen="'+dirOrigen+'", dirDestino="'+dirDestino+'", horaSalidaDestino="'+horaSalidaDestino+'" , horaSalidaOrigen="'+horaSalidaOrigen+'", placaCarro="'+placaCarro+'", cupos="'+cupos+'", carpooler="'+carpooler+'", total="'+total+'", diasServicio="'+diasServicio+'" WHERE email="'+email+'"', async (error, results) => {

            console.log('Actualizacion exitosa')
            respuesta = "1"
            res.send(datos);  
            console.log(datos)
        })
        
    }
}
// actualizar cupos del carpooler 

export const updateCupos = (req, res) =>{
    const cupos = req.body.cupos;
    const email = req.body.email;


    const datos = [{
        cupos,
        email
    }];

        let respuesta;


        conexion.query('UPDATE usuario SET cupos="'+cupos+'" WHERE email="'+email+'"', async (error, results) => {

            console.log('Actualizacion exitosa')
            respuesta = "1"
            res.send("actualizarCupos", datos);  
            console.log("actualizarCupos", datos)
        })
        
}

//actualizar cupos del usuario
export const updateCuposUsuario = (req, res) =>{

    const idUsuario3 = req.body.idUsuario3;
    const cuposReserva = req.body.cuposReserva;
    const emailCarpooler = req.body.emailCarpooler;
    
        let respuesta;

            conexion.query('UPDATE inscribir SET cuposReserva="'+cuposReserva+'" WHERE idUsuario3="'+idUsuario3+'" and emailCarpooler="'+emailCarpooler+'"  ', async (error, results) => {

            console.log('Actualizacion cuposUsuario exitosa')
            respuesta = "1"
            res.send(respuesta);  
            console.log(respuesta)
        })
        
}

// actualiza cupos del carpooler

export const updateCuposCarpooler = (req, res) => {

    const emailCarpooler = req.body.emailCarpooler;
    const whatsappCarpooler = req.body.whatsappCarpooler;
    const cuposCancelar = req.body.cuposCancelar;

        let respuesta;

            conexion.query('UPDATE usuario SET cupos="'+cuposCancelar+'" WHERE email="'+emailCarpooler+'" and whatsappCarpooler="'+whatsappCarpooler+'"', async (error, results) => {

            console.log('Actualizacion cuposCarpooler exitosa')
            respuesta = "1"
            res.send(respuesta);  
            console.log(respuesta)
        })
}

// elimina la reserva del cliente /////

export const updateReservaCliente = (req, res) => {

    const reserva = req.body.reserva;
    const emailCliente = req.body.emailCliente;
    const whatsappCliente = req.body.whatsappCliente;
    const idUsuario2 = req.body.idUsuario2;
    

        let respuesta;

        if (reserva===0) {
            respuesta = "0"
            res.send(respuesta);  
            console.log(respuesta)
        } else {

            conexion.query('UPDATE inforeserva SET reserva="'+reserva+'" WHERE idUsuario2="'+idUsuario2+'"', async (error, results) => {

            console.log('Actualizacion exitosa')
            respuesta = "1"
            res.send(respuesta);  
            console.log(respuesta)
        })
        
    }
}

// elimina la reserva de la inscripcion  ///// //////////////////////////   este hay que modificarlo para que lea el id

export const updateReservaInscribir = (req, res) => {

    const inscribir = req.body.inscribir;
    const emailCarpooler = req.body.emailCarpooler;

        let respuesta;

        if (inscribir===0) {
            respuesta = "0"
            res.send(respuesta);  
            console.log(respuesta)
        } else {

            conexion.query('UPDATE inscribir SET inscribir="'+inscribir+'" WHERE emailCarpooler="'+emailCarpooler+'"', async (error, results) => {

            console.log('Actualizacion exitosa')
            respuesta = "1"
            res.send(respuesta);  
            console.log(respuesta)
        })
        
    }
}


// reservar servicio /////

export const reservaServicio = (req, res) => {

    const reserva = req.body.reserva;
    const emailCliente = req.body.emailCliente;

        let respuesta;

        if (reserva===0) {
            respuesta = "0"
            res.send(respuesta);  
            console.log(respuesta)
        } else {

            conexion.query('UPDATE inforeserva SET reserva="'+reserva+'" WHERE emailCliente="'+emailCliente+'"', async (error, results) => {

            console.log('Actualizacion exitosa')
            respuesta = "1"
            res.send(respuesta);  
            console.log(respuesta)
        })
        
    }
 //   res.send(datos);

}

// crear una nueva inscripcion e informacion en la reserva /////
export const nuevaReserva = (req, res) => {

    // tabla reserva
    const reserva = req.body.reserva;
    const emailCliente = req.body.emailCliente;
    const idUsuario2 = req.body.idUsuario2;
    
    
        conexion.query('INSERT INTO inforeserva SET reserva="'+reserva+'", emailCliente="'+emailCliente+'", idUsuario2="'+idUsuario2+'"  ', async (error, results)=> {

            console.log('Actualizacion exitosa')
            respuesta = "1"
            res.send(respuesta);  
            console.log(respuesta)
        })
}

export const nuevaInscripcion = (req, res) => {


    // tabla inscripcion
    const inscribir = req.body.inscribir;
    const idUsuario3 = req.body.idUsuario3;
    const emailCarpooler = req.body.emailCarpooler;
    const cuposReserva = req.body.cuposReserva;


          conexion.query('INSERT INTO inscribir SET inscribir="'+inscribir+'", idUsuario3="'+idUsuario3+'", emailCarpooler="'+emailCarpooler+'", cuposReserva="'+cuposReserva+'"  ', async (error, results) => {

            console.log('Actualizacion exitosa')
            respuesta = "1"
            res.send(respuesta);  
            console.log(respuesta)
        })
}

////// link de prueba ///////
export const linkPrueba = (req, res) => {

    const email = req.body.email;
    const dirOrigen = req.body.dirOrigen;

    const datos = [{dirOrigen,
        email}];

        console.log(dirOrigen);

    conexion.query('UPDATE usuario SET dirOrigen ="'+dirOrigen+'"  WHERE email ="'+email+'"', async (error, results) => {
        if (error) {
            throw error
        } else {
            console.log('Actualizacion exitosa')
            console.log(datos);
        }
        
    })
    res.send(datos);
}


// buscar reservas hechas
///  ver informacion de reservas ////
export const buscaReserva = (req, res) => {

    const idUsuario3 = req.query.idUsuario3;
    const emailCarpooler = req.query.emailCarpooler;
    const inscribir = req.query.inscribir;

    conexion.query('SELECT * FROM inscribir WHERE inscribir="'+inscribir+'" and idUsuario3="'+idUsuario3+'" and emailCarpooler="'+emailCarpooler+'"', async (error, results, fields) => {
        
        if (error)
        throw error;


    results.forEach(results => {
        console.log(results);
    });

    if (results == '') {
        res.send("2")
        
    }else{
        res.send("3")
    }  

    })    
}


///  ver informacion de reservas ////
export const informeReserva = (req, res) => {

    const reserva = req.query.reserva;
    const email = req.query.email;
    const idCarpooler = req.query.idCarpooler;

    conexion.query('SELECT * FROM inforeserva INNER JOIN usuario on usuario.idUsuario = inforeserva.idUsuario2 WHERE inforeserva.reserva="'+reserva+'" and inforeserva.emailCliente="'+email+'"', async (error, results, fields) => {
        
        if (error)
        throw error;

    results.forEach(results => {
        console.log(results);
    });

    res.send(results)

    })    
}


// informacion de los cupos resvados ////
export const informeCuposReservados = (req, res) => {

    const idUsuario3 = req.query.idUsuario3;
    const inscribir = req.query.inscribir;

    conexion.query('SELECT * FROM inscribir INNER JOIN usuario on usuario.idUsuario = inscribir.idUsuario3  WHERE inscribir.idUsuario3 ="'+idUsuario3+'" and inscribir ="'+inscribir+'"  ', async (error, results, fields) => {
        
        if (error)
        throw error;

    results.forEach(results => {
        console.log(results);
    });

    res.send(results)

    })    
}
 
///  Dias de reserva que hace el usuario ////
export const diasReservados = (req, res) => {

    const inscribir = req.query.inscribir;
    const idUsuario3 = req.query.idUsuario3;


    conexion.query('SELECT * FROM inscribir WHERE idUsuario3="'+idUsuario3+'" and inscribir="'+inscribir+'"  ', async (error, results, fields) => {
        
        if (error)
        throw error;

    results.forEach(results => {
        console.log(results);
    });

    res.send(results)

    })    
}


export const informeReservasCarpooler = (req, res) => {

    const inscribir = req.query.inscribir;
    const email = req.query.email;

    conexion.query('SELECT * FROM inscribir inner join usuario on usuario.idUsuario = inscribir.idUsuario3 WHERE inscribir.emailCarpooler="'+email+'" and inscribir.inscribir="'+inscribir+'"', async (error, results, fields) => {
        
        if (error)
        throw error;

    results.forEach(results => {
        console.log(results);
    });

    res.send(results)

    })    
}

///  ver informacion de carpooling ////
export const informeCarpooling =(req, res) => {

    const carpooler = req.query.carpooler;
    const email = req.query.email;
    const cupos = req.query.cupos;

    conexion.query('SELECT * FROM usuario WHERE carpooler="'+carpooler+'" and usuario.email!="'+email+'" and usuario.cupos>"'+cupos+'" ' , async (error, results, fields) => {
        
        if (error)
        throw error;

    results.forEach(results => {
        console.log(results);
    });

    res.send(results)

    })    
}


// elliminar usuario ///
export const eliminarUsuario = (req, res) => {

    const email = req.query.email;

    conexion.query('DELETE FROM usuario WHERE email = "' + email + '"');
    let eliminado = 'eliminado';
    res.send(eliminado);

}

