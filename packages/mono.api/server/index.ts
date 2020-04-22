import express from "express";
import face from "mono.fun/random/faces";

const port = process.env.PORT || "4000";
const server = express();

server.listen(port, (err: unknown) => {
  if (err) throw err;

  console.info(`${face()} >
    API Ready on http://localhost:${port}
  `);
});
