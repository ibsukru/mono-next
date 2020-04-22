/*eslint-env node*/

//Experimenting nps https://github.com/sezna/nps
const tsc = (options) => `tsc ${options}`;
const tcb = (options) => tsc(`-b ${options}`);
const tcc = () => tcb("--clean");
const start = (options) => `yarn start ${options}`;
const rimraf = (path) => `rm -rf ${path}`;
const clean = () => start("clean");
const buildAll = () => "lerna run build";
const lint = (options) => `eslint 'packages/**/*.{ts,tsx}' ${options}`;
const cwd = (options) => start(`--cwd ${options}`);
const packages = "packages/";

const libs = ["mono.web", "mono.api"];

const [webPath, apiPath] = libs.map((lib) => `${packages}${lib}`);
const libFile = (path) => `packages/**/${path}`;

module.exports = {
  scripts: {
    build: {
      types: `${tcb(libFile("tsconfig.build.json"))}`,
      default: `${clean()} && ${start("build.types")} && ${buildAll()}`,
    },
    clean: `${rimraf(libFile("dist*"))} && ${tcc()}`,
    clear: `
      ${clean()} && 
      ${rimraf(libFile("node_modules"))} && 
      ${rimraf("yarn.lock")} && yarn
    `,
    lint: {
      default: lint(),
      fix: lint(`--fix`),
    },
    compile: tsc(`--noEmit`),
    dev: cwd(`${webPath} ${start("dev")}`),
    default: {
      default: cwd(`${webPath} ${start()}`),
      api: cwd(`${apiPath} ${start()}`),
    },
  },
};
