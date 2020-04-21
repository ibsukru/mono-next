import express from "express";
import next from "next";
import { add as dist } from "@mono/lib/src";
import { add } from "@mono/lib";

import { install } from "source-map-support";
install();

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
    console.log(
      `> Ready on http://localhost:${port}, add(1)(3) = ${add(1)(3)} === ${dist(
        1
      )(3)}`
    );
  });
});
