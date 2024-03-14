import { comparePassword } from '../auth';
import { createJWT } from '../auth';
import prisma from '../db';

export const signing = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  const isAuthenticated = await comparePassword(
    req.body.password,
    user.password
  );

  if (!isAuthenticated) {
    res.status(401);
    res.json({ msg: 'Authentication failed' });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
