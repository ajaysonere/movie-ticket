import express from "express";
import cors from "cors";
import 'dotenv/config';
import connection from "./config/DBconnection.js";
import authRouter from "./routers/authRouter.js";

const app = express();

const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ success: true, message: "API is working.." });
});

app.use("/api/auth" , authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
  connection();
});
