interface Items {
  _id: string;
  title: string;
  img: string;
  link: string;
  description: string;
}

export interface Data {
  _id: string;
  crawler: string;
  date: Date;
  items: Items[];
  topic: string;
}
