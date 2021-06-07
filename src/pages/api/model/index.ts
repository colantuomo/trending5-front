import { Schema, model, Model } from "mongoose";

const Items = new Schema({
  title: String,
  description: String,
  link: String,
  img: String,
});
const schema = new Schema({
  crawler: String,
  topic: String,
  items: [Items],
  date: Date,
});
export let TopicsModel: Model<any>;

try {
  TopicsModel = model("topics");
} catch (e) {
  TopicsModel = model("topics", schema);
}
