import express from "express";

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/addArticle", (request, response) => {
  const { title } = request.body;
  console.log(title);
  
  response.send(`Product successfully added ${title}`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
