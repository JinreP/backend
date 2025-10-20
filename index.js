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

// app.listen(4000, () => {
//   console.log(
//     figlet.textSync("GALSAA AHAA!", {
//       font: "banner4",
//       horizontalLayout: "default",
//       verticalLayout: "default",
//       width: 80,
//       whitespaceBreak: true,
//     })
//   );
// });
app.get("/", async (request, response) => {
  const googleData = async () => {
    const res = await axios.get(
      "https://gogo.mn/cache/news-shinemedee?size=15"
    );
    response.send(res.data);
  };
  googleData();
  //   response.send("Ssssasaas");
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

// app.get("/students", async (request, response) => {
//   let studentsDetail = [
//     { Total_Students: 21 },
//     {
//       name: "Subeedei",
//       age: 19,
//       Hobby: "video game",
//     },
//     {
//       name: "Amaraa",
//       age: 18,
//       Hobby: "video game, driving",
//     },
//     {
//       name: "Barsaa",
//       age: 19,
//       Hobby: "video game",
//       trait: "super lucky yvdag yndoo",
//     },
//     {
//       name: "baagii",
//       age: 19,
//       Hobby: "video game, coding",
//     },
//     {
//       name: "Galsandorj",
//       age: 33,
//       Hobby: "video game",
//     },
//     {
//       name: "Galsandorj",
//       age: 33,
//       Hobby: "video game",
//     },
//     {
//       name: "Khusel",
//       age: 30,
//       Hobby: "gym",
//     },
//     {
//       name: "Badmaa",
//       age: 17,
//       Hobby: "video game, pc",
//     },
//     {
//       name: "Ariuka",
//       age: 16,
//       Hobby: "video game, coding",
//     },

//     {
//       name: "Bayarmaa",
//       age: 22,
//       Hobby: "korea duu sonsoh, coding",
//     },
//     {
//       name: "Bayarmaa",
//       age: 22,
//       Hobby: "korea duu sonsoh, coding",
//     },
//     {
//       name: "Temuujin",
//       age: 21,
//       Hobby: "sport",
//     },
//     {
//       name: "tserenpuntsag",
//       age: 19,
//       Hobby: "idk",
//     },
//     {
//       name: "Baaska",
//       age: 30,
//       Hobby: "korea duu sonsoh, coding",
//     },
//     {
//       name: "Bayarmaa",
//       age: 22,
//       Hobby: "korea duu sonsoh, coding",
//     },
//     {
//       name: "Zolo",
//       age: 17,
//       Hobby: "hun zodoh",
//     },
//     {
//       name: "Sarangoo",
//       age: 32,
//       Hobby: "duu, coding",
//     },
//     {
//       name: "Urantogos",
//       age: 22,
//       Hobby: "coding",
//     },
//     {
//       name: "Bayrjavhlan",
//       age: 20,
//       Hobby: "coding",
//     },
//     {
//       name: "Tuvshin",
//       age: 32,
//       Hobby: "coding",
//     },
//     {
//       name: "Enkzul",
//       age: 20,
//       Hobby: "anime coding",
//     },
//   ];

//   response.send(studentsDetail);
// });

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
