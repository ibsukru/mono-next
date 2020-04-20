import { add } from "@mono/lib";
import { say } from "cowsay-browser";

export default () => (
  <pre>{say({ text: `1 + 2 = ${add(1)(2).toString()}` })}</pre>
);
