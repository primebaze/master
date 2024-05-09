import express from "express";
import mysql from "mysql";
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import forumRoutes from "./routes/forum.js";
import cors from "cors";
import { db } from "./db.js";
const app = express();
const PORT = 8000;



// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1); 
  }
  console.log("Connected to MySQL");
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/forum", forumRoutes);
app.use("/api/user", userRoutes);
app.use("/api/course", courseRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
