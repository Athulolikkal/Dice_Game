import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import resultController from "./controllers/result/result_controller.js";
const app = express();
import session from "express-session";
const store = new session.MemoryStore({ checkPeriod: 86400000 })

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));

app.use(
  session({
    secret: 'newSecretKey',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
)

app.post("/getresult", resultController.checkReult);
app.post('/getQuestion/:id/:userId', resultController.getQuestion)

app.listen(3000, () => {
  console.log("port is running on 3000");
});
