import { hashPassword,createJWT } from '../auth';
import prisma from '../db';

export const createUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });

  const token = createJWT(user);

  res.json(token);
};
