export type News = {
  id: String;
  title: String;
  category: {
    name: String;
  }
  publishedAt: string;
  createdAt: string;
}
export type Category = {
  name: String;
}