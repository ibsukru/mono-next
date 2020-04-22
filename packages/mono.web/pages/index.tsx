import { add as dist } from "@mono/lib/src";
import { add } from "@mono/lib";
import { serverAndClient } from "../common";
import face from "mono.fun/random/faces";

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
      <pre>
        {face()} dist says: {`2 + 1 = ${dist(2)(1).toString()}`}
      </pre>
      <pre>
        {serverAndClient()} lib says: {`1 + 2 = ${add(1)(2).toString()}`}
      </pre>
    </div>
  );
};
