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
  console.log("It seems you're not a member yet. :(");
  res.redirect("http://localhost:3000/login");
});

app.post("/signup", (req, res) => {
  console.log("Signup data was received!");

  const email = req.body.email;
  const password = req.body.password;
  const confirm_password = req.body.confirm_password;

  if (!email || !password || !confirm_password) {
    res.status(400).send("Missing data");
    return;
  }

  if (accountExists(email)) {
    res.status(403).send("This account already exists");
    return;
  }

  if (password !== confirm_password) {
    res.status(400).send("Passwords do not match");
    return;
  }

  if (password.length < 8) {
    res.status(400).send("Password must be more than 8 characters");
    return;
  }

  const accountExists = (email) => {
    //check if account already exists
    return false;
  };
});

app.listen(3001, () => console.log("Server ready"));
