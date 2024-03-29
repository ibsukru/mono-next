import express from "express";
import next from "next";
import { serverAndClient } from "../common";

const port = process.env.PORT || "3000";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.info(`${serverAndClient()}> Ready on http://localhost:${port}`);
  });
});
