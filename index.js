import chalk from "chalk";
import express, { response } from "express";
import axios from "axios";
import figlet from "figlet";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
console.log(process.env.PORT);
const port = process.env.PORT;
const log = console.log;

const app = express();

app.use(bodyParser.json());

app.get("/", async (request, response) => {
  const googleData = async () => {
    const res = await axios.get(
      "https://gogo.mn/cache/news-shinemedee?size=15"
    );
    response.send(res.data);
  };
  googleData();
});

let students = [];

app.get("/students", async (request, response) => {
  response.send(students);
});

app.post("/students", async (req, res) => {
  console.log(req.body);
  const before = students.filter((student) => student.phone === req.body.phone);

  console.log("BEFORE", before);
  if (before.length === 0) {
    students.push(...req.body);
    res.status(200).send(students).end();
  } else {
    res.status(409).send({ message: "error" });
  }
});

app.get("/students/phone", async (req, res) => {
  response.send(students);
});

app.patch("/students/phone", async (req, res) => {
  const userPhone = req.body.phone;
  const { name, age, Hobby, gender } = req.body;

  console.log("DUGAAR BOLON NAS", userPhone, age);

  const student = students.find((student) => student.phone === userPhone);

  console.log(students);

  if (student) {
    if (age) student.age = age;
    if (name) student.name = name;
    if (gender) student.gender = gender;
    if (Hobby) student.Hobby = Hobby;
    res.send(students);
  } else {
    res.status(404).send("tani oruulsan dugaar ashiglaltand bhgu bn");
  }
});

app.delete("/students/:phone", async (req, res) => {
  const phone = req.params.phone;
  const originalLength = students.length;
  students = students.filter((student) => student.phone !== phone);
  console.log(students);

  if (students.length < originalLength) {
    return res.send(students);
  } else {
    return res.status(404).send({ message: "no student found " });
  }
});

app.get("/students/male", async (request, response) => {
  const maleStudents = students.filter((student) => student.gender === "male");
  if (maleStudents.length === 0) {
    response.status(409).send({ message: "error" });
  } else {
    response.send(maleStudents);
  }
});

app.get("/students/female", async (request, response) => {
  const female = students.filter((student) => student.gender === "female");
  if (female.length === 0) {
    response.status(409).send({ message: "error" });
  } else {
    response.send(female);
  }
});

app.listen(port, () => {
  log(
    chalk.bgBlack(
      chalk.bold(
        chalk.red("Server"),
        chalk.blue("is"),
        chalk.underline("running")
      )
    ) + " http://localhost:3000/"
  );
});
