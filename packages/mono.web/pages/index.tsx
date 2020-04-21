import { add as dist } from "@mono/lib/dist/src";
import { add } from "@mono/lib";
import { say } from "cowsay-browser";
import { Fragment } from "react";

export default () => (
  <Fragment>
    <pre>{say({ text: `1 + 2 = ${add(1)(2).toString()}` })}</pre>
    <pre>{say({ text: `2 + 1 = ${dist(2)(1).toString()}` })}</pre>
  </Fragment>
);
