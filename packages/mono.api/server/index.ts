import express from "express";
import { add } from "@mono/lib";
import partial from "@mono/lib/src/add";
import face from "mono.fun/random/faces";

const port = process.env.PORT || "4000";
const server = express();

server.listen(port, (err: unknown) => {
  if (err) throw err;

  console.log(`face`, face());
  console.info(`
  API Ready on http://localhost:${port}
    ${add(2)(3)}
    ${partial(2)(3)}
  `);
});
