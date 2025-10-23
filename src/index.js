import chalk from "chalk";
import express, { response } from "express";
import figlet from "figlet";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./database/db.js";

import { UserRouter } from "./routers/user.js";

dotenv.config();
console.log(process.env.PORT);
const port = process.env.PORT;
const log = console.log;

const app = express();

app.use(bodyParser.json());

app.use("/user", UserRouter);

app.listen(port, () => {
  connectDB();
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
