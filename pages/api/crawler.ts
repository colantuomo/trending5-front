// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connect as conn } from "mongoose";
import { TopicsModel } from "./model";

conn(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then((_) => console.log("connected"));

export default async function handler(req, res) {
  res.statusCode = 200;
  const result = await TopicsModel.find({});
  res.json(result);
}
