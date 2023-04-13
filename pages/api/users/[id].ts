import { NextApiHandler } from "next";
import { Users } from "../../../utils/users";
import prisma from "../../../libs/prisma";

const handlerGet: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id as string),
    },
  });

  if (user) {
    res.json({ status: true, user: user });
  } else {
    res.status(404).json({ status: false, message: "usuário não encontrado" });
  }
  // let myUser = null;

  // for (let i in Users) {
  //   if (Users[i].id.toString() === id) {
  //     myUser = Users[i];
  //   }
  // }
  // if (myUser) {
  //   res.json(myUser);
  // } else {
  //   res.json({ error: "Usuário não encontrado" });
  // }
};

const handlerPut: NextApiHandler = async (req, res) => {
  const { name, active } = req.body;
  const { id } = req.query;

  let data: {
    name?: string;
    active?: boolean;
  } = {};

  if (name) {
    data.name = name;
  }

  if (active) {
    switch (active) {
      case true:
      case "true":
      case 1:
      case "1":
        data.active = true;
        break;
      case false:
      case "false":
      case 0:
      case "0":
        data.active = false;
    }
  }

  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id as string) },
    data: data,
  });

  if (updatedUser) {
    res.json({ status: true, user: updatedUser });
  } else {
    res.status(404).send({
      status: false,
      message: "Não foi possível atualizar este usuario",
    });
  }
};

const handlerDelete: NextApiHandler = async (req, res) => {
  const { id } = req.query;
 const deleteUser =  await prisma.user
    .delete({
      where: { id: parseInt(id as string) },
    })
    .catch(() => {
      res.json({ error: "usuário não encontrado" });
    });

    if (deleteUser) {
      res.json({ status: true });
    }
};

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "GET":
      handlerGet(req, res);
      break;
    case "PUT":
      handlerPut(req, res);
      break;
    case "DELETE":
      handlerDelete(req, res);
  }
};

export default handler;
