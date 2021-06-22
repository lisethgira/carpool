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
    sql.query('UPDATE usuario SET ? WHERE idUsuario = ?', [request, id], (err, res) => {
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




export default User;