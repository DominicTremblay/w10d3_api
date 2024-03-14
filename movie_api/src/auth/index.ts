import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.SECRET_KEY
  );

  return token;
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const authenticate = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send({
      msg: 'Not authorized',
    });
    return;
  }

  const [, token] = bearer.split(' ');

  if (!token) {
    res.status(401);
    res.send({
      msg: 'Not authorized',
    });
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = payload;
    next();
  } catch (err) {
    console.log(err.message);
    res.status(401);
    res.json({
      msg: err.message,
    });
    return;
  }
};
