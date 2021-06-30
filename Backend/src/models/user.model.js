import bcrypt from "bcryptjs";
import sql from '../database';
import jwt from "jsonwebtoken";

const User = function (user) {
    this.nombre = user.nombre;
    this.apellido = user.apellido;
    this.telefono = user.telefono;
    this.email = user.email;
    this.documento = user.documento;
    this.clave = user.clave;
    this.foto = user.foto;
}

User.create = (newUser, result) => {
    console.log(newUser);
    sql.query("INSERT INTO usuario SET ?", newUser, (err, res) => {
      if (err) result(err, null);
      else result(null, { id: res.idUsuario, ...newUser });
      console.log(err);
      console.log(res);
    });
};

User.update = (request, id , result) => {
    console.log(request)
    console.log(id)
    sql.query('UPDATE usuario SET ? WHERE idUsuario = ?', [{...request, password: User.encryptPassword(request.password)}, id], (err, res) => {
      if (err) result(err, null);
      else result(null, { id: res.idUsuario, ...request });
      console.log(err);
      console.log(res);
    });
};

User.findById = async (UserId, result) => {
    try {
        const [results, ] = await sql.query(`SELECT * FROM usuario WHERE idUsuario = ${UserId}`);
        return results;
    } catch(err) {
        console.log("Error" + err);
        return [];
    }
};

User.findByEmail = async ({email}) => {
    try {
        const [results, ] = await sql.query(`SELECT * FROM usuario WHERE email = '${email}'`);
        return results;
    } catch(err) {
        console.log("Error" + err);
        return [];
    }
};

User.findOne = ({email, clave}, result) => {
    console.log(email, clave);
    sql.query(`SELECT * FROM usuario WHERE email = '${email}' and clave = '${clave}'`, (err, res) => {
        console.log(res);
      if (err) result(err, null);
      else if (res.length) result(null, res[0]);
      else result({message: "No encontrado"}, null)
    });
};


User.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
  
User.comparePassword = async (password, receivedPassword) => await bcrypt.compare(password, receivedPassword)

User.getAll = (result) => {
    sql.query("SELECT * FROM usuario", (err, res) => {
      if (err) result(err, null);
      else result(null, [...res]);
      console.log(err);
      console.log(res);
    });
};

User.updateCupos = (cupos, email , result) => {
    sql.query('UPDATE usuario SET cupos = ? WHERE email = ?', [cupos, email], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.updateInscribir = (idUsuario3, cuposReserva, emailCarpooler , result) => {
    sql.query('UPDATE inscribir SET cuposReserva = ? WHERE idUsuario3 = ? and emailCarpooler = ?', [cuposReserva, idUsuario3, emailCarpooler], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.updateCuposCarpooler = (emailCarpooler, cuposCancelar , result) => {
    sql.query('UPDATE inscribir SET cuposReserva = ? WHERE emailCarpooler = ?', [cuposCancelar, emailCarpooler], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.updateReserva = (reserva, emailCliente,idUsuario2 , result) => {
    sql.query('UPDATE inforeserva SET reserva = ? WHERE idUsuario2 = ?', [reserva, idUsuario2], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.Delete = (email , result) => {
    sql.query('DELETE FROM usuario WHERE email = ?', [email], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.informeCarpooling = (carpooler, email, cupos , result) => {
    sql.query('SELECT * FROM usuario WHERE carpooler = ? and email = ? and cupos = ?', [carpooler, email, cupos], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.informeReservasCarpooler = (inscribir, email, result) => {
    sql.query('SELECT * FROM inscribir inner join usuario on usuario.idUsuario = inscribir.idUsuario3 WHERE inscribir.emailCarpooler = ? and inscribir.inscribir = ?', [email, inscribir], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.diasReservados = (inscribir, idUsuario3, result) => {
    sql.query('SELECT * FROM inscribir WHERE idUsuario3 = ? and inscribir = ?', [idUsuario3, inscribir], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.informeCuposReservados = (idUsuario3, inscribir, result) => {
    sql.query('SELECT * FROM inscribir INNER JOIN usuario on usuario.idUsuario = inscribir.idUsuario3  WHERE inscribir.idUsuario3 = ? and inscribir = ?', [idUsuario3, inscribir], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.informeReserva = (reserva, email, result) => {
    sql.query('SELECT * FROM inforeserva INNER JOIN usuario on usuario.idUsuario = inforeserva.idUsuario2 WHERE inforeserva.reserva=? and inforeserva.emailCliente=?', [reserva, email], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.updateReservaInscribir = (inscribir, emailCarpooler, result) => {
    sql.query('UPDATE inscribir SET inscribir= ? WHERE emailCarpooler = ?', [inscribir, emailCarpooler], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.reservaServicio = (reserva, emailCliente, result) => {
    sql.query('UPDATE inforeserva SET reserva = ? WHERE emailCliente = ?', [reserva, emailCliente], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.nuevaReserva = (reserva, emailCliente, idUsuario2, result) => {
    sql.query('INSERT INTO inforeserva SET reserva=?, emailCliente=?, idUsuario2=?', [reserva, emailCliente, idUsuario2], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.nuevaInscripcion = (inscribir, idUsuario3, emailCarpooler, cuposReserva, result) => {
    sql.query('INSERT INTO inscribir SET inscribir=?, idUsuario3=?, emailCarpooler=?, cuposReserva=?', [inscribir, idUsuario3, emailCarpooler, cuposReserva], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.linkPrueba = (email, dirOrigen, result) => {
    console.log(email);
    console.log(dirOrigen);
    sql.query('UPDATE usuario SET dirOrigen = ?  WHERE email = ?', [dirOrigen,email], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};

User.buscaReserva = (idUsuario3, emailCarpooler, inscribir, result) => {
    sql.query('SELECT * FROM inscribir WHERE inscribir=? and idUsuario3=? and emailCarpooler=?', [inscribir,idUsuario3, emailCarpooler], (err, res) => {
      if (err) result(err, null);
      else result(null, { ...res });
    });
};


export default User;