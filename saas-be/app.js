const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello from the other sideee!"));

app.post("/login", (req, res) => {
  console.log("Login data was received");

  const email = req.body.email;
  const password = req.body.password;
});

app.listen(3001, () => console.log("Server ready"));
