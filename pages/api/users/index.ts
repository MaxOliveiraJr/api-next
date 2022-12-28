import { NextApiHandler } from "next";
import { Users } from "../../../utils/users";

const handlerGet: NextApiHandler = async (req, res) => {
  return res.json(Users);
};

const handlerPost: NextApiHandler = async (req, res) => {
  return res.json({ status: true });
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
