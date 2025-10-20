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

app.get("/students/male", async (request, response) => {
  const maleStudents = students.filter((student) => student.gender === "male");
  response.send(maleStudents);
});

app.get("/students", async (request, response) => {
  response.send(students);
});

app.post("/students", async (req, res) => {
  console.log(req.body);
  const before = students.filter((student) => student.phone === req.body.phone);

  console.log("BEFORE", before);
  if (before.length === 0) {
    students.push(req.body);
    res.status(200).send(students).end();
  } else {
    res.status(409).send({ message: "error " });
  }
});

app.post("/students/male", async (req, res) => {
  console.log(req.body);
  const before = students.filter((student) => student.phone === req.body.phone);

  console.log("BEFORE", before);
  if (before.length === 0) {
    if (req.body.gender === "male") {
      students.push(req.body);
      res.status(200).send(students).end();
    } else {
      res
        .status(400)
        .send({ message: "Only male students can be added to this endpoint" });
    }
  } else {
    res.status(409).send({ message: "error " });
  }
});
