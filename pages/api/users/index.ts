import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  res.json([
    { name: "Max", age: 90 },
    { name: "Max 1", age: 12 },
    { name: "Max 2", age: 8 },
  ]);
};


export default handler;