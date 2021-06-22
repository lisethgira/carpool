import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/user.model";

export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({ message: "No token provided", data: null });

  try {
    //console.log(token);
    const decoded = jwt.verify(token, config.secrectKey);
    ///console.log(decoded);
    req.userId = decoded.idUsuario;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "No user found", data: null });
    req.customer = user;
    //console.log(req.userId);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!", data: null });
  }
};

