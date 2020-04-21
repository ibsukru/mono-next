import { add as dist } from "@mono/lib/src";
import { add } from "@mono/lib";
import { say } from "cowsay-browser";

export default () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <pre>{say({ text: `1 + 2 = ${add(1)(2).toString()}` })}</pre>
      <pre>{say({ text: `2 + 1 = ${dist(2)(1).toString()}` })}</pre>
    </div>
  );
};
