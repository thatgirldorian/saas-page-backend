const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello from the other sideee!"));

app.post("/login", (req, res) => {
  console.log("Login data was received");

  const email = req.body.email;
  const password = req.body.password;

  //check if the email and password is correct
  if (email === "test@test.com" && password === "test") {
    console.log("A new member is logged in. :)");
    res.redirect("http://localhost:3000/members");
    return;
  }
});

app.listen(3001, () => console.log("Server ready"));
