import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  res.json({ testando: true });
};

export default handler;
