import chalk from "chalk";
import express from "express";
import axios from "axios";
import figlet from "figlet";
import bodyParser from "body-parser";
const log = console.log;
const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
  log(
    chalk.bgBlack(
      chalk.bold(
        chalk.red("Server"),
        chalk.blue("is"),
        chalk.underline("running")
      )
    )
  );
});

app.get("/", async (request, response) => {
  const googleData = async () => {
    const res = await axios.get(
      "https://gogo.mn/cache/news-shinemedee?size=15"
    );
    response.send(res.data);
  };
  googleData();
});

const students = [];

app.get("/students", async (request, response) => {
  let studentDetail = {
    name: "Subeedei",
    age: 19,
    Hobby: "video game",
  };

  response.send(students);
});

app.post("/students", async (req, res) => {
  console.log(req.body);
  const before = students.filter((student) => student.name === req.body.name);

  console.log("BEFORE", before);
  if (before.length === 0) {
    students.push(req.body);
    res.status(200).send(students).end();
  } else {
    res.status(409).send({ message: "error " });
  }
});
