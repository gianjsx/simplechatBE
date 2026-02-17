// IMPORT LIBRARIES
import cors from "cors";
import morgan from "morgan";
import { Server } from "socket.io";

// CREATE SOCKET SERVER
import express from "express";
import http from "http";
const app = express();
const server = http.Server(app);
export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// CONFIG SERVER
app.use(cors());
app.use(morgan("short"));

// ROUTES
server.listen(process.env.PORT || 4001, (err) =>
  err ? console.log("Error Server") : console.log(`Server ON on port ${process.env.PORT || 4000}`)
);
