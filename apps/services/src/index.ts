import express, { type Request, type Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, pookie! ❤️");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
