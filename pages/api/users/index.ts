import { NextApiHandler } from "next";
import { Users } from "../../../utils/users";

const handlerGet: NextApiHandler = async (req, res) => {
  const { name, age }:any = req.query;

  if (name || age) {
    Users.map((user) => {
      if (user.name === name || user.age == parseInt(age)) {
        return res.json({ status: true, user: user });
      }
    });

    return res.status(404).json({ status: false, messege: "error" });
  } else {
    return res.status(200).json({ status: true, users: Users });
  }
};

const handlerPost: NextApiHandler = async (req, res) => {
  const { name, age } = req.body;

  if (name && age) {
    return res.json({ status: true, user: { name } });
  } else {
    return res.json({ status: false, message: "error " });
  }
};

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "GET":
      handlerGet(req, res);
      break;
    case "POST":
      handlerPost(req, res);
      break;
  }
};

export default handler;
