import { data } from ".";
import random from "mono.lib/src/random";

const face = () => data[random(data.length)];

export default face;
