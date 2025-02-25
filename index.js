import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render("index.ejs");
})

app.post('/', (req, res) => {
    const blog = req.body["text"];
    res.render("index.ejs",{content: blog});
})

app.post('/edit', (req, res) => {
  const makeup = req.body["editcontent"];
  res.render("edit.ejs",{newblog: makeup});
})

app.post('/final', (req, res) => {
  const changes = req.body["changesmaked"];
  res.render("index.ejs",{content: changes});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})