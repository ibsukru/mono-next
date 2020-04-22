import express from "express";
import { add } from "@mono/lib";
import partial from "@mono/lib/src/add";

const port = process.env.PORT || "4000";
const server = express();

server.listen(port, (err: unknown) => {
  if (err) throw err;

  console.info(`
  API Ready on http://localhost:${port}
    ${add(2)(3)}
    ${partial(2)(3)}
  `);
});
