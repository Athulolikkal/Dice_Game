import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import resultController from "./controllers/result/result_controller.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));

app.get("/getresult", resultController.checkReult);

app.listen(3000, () => {
  console.log("port is running on 3000");
});
