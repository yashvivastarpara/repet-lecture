const express = require("express");
const connect = require("./database");
const schema = require("./schema");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("wlcm home");
});

app.post("/signin", async (req, res) => {
  await schema.create(req.body);
  res.send("welcome in signin page");
});

app.patch("/update/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.send("update");
});

app.delete("/delete/:id", (req, res) => {
  console.log("delete");
  console.log(req.params);
  res.send("delete");
});



app.listen(8000, (req, res) => {
  console.log("listen in 8000");
  connect();
});
