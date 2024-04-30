import express from "express";
import userRoutes from "./routes/user.js"
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.listen(8000, () => {

    console.log("Connected to backend.");
  });
  