const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello from the other sideee!"));

app.listen(3001, () => console.log("Server ready"));
