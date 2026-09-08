import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./Routes/emailRouter.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "https://portfolio-chi-indol-e2vazkxaa1.vercel.app" }));

app.use(express.json());

app.use("/api", contactRoutes);

app.get("/", async (req, res) => {
  try {
    res.status(200).json({
      sucess: true,
      message: "Serving is running",
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      error: "Server error",
    });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
