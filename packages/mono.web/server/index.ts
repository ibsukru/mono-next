import express from "express";
import next from "next";
import { install } from "source-map-support";
import face from "mono.fun/random/faces";
import { add as src } from "@mono/lib/src";
import { add } from "@mono/lib";
import { serverAndClient } from "../common";
install();

console.info(serverAndClient(), {
  src: src(1)(2),
  add: add(1)(2),
});

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
    console.info(`${face()}> Ready on http://localhost:${port}`);
  });
});
