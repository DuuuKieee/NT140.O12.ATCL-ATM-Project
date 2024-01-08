import dotenv from "dotenv";
import express from "express";

import documents from "./Routes/documents.js";
import authenticate from "./Routes/authenticate.js";

import cors from "cors";


(async function () {
  dotenv.config();

  const { PORT } = process.env;
  const app = express();
  app.use(cors())
  const server = app.listen(PORT, () =>
    console.log(`Backend started on port ${PORT}`)
  );

  app.use("/api/v1/documents", authenticate, documents);
})();