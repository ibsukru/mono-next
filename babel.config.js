/*eslint-env node*/

const libs = ["mono.lib", "mono.fun"];

const alias = libs.reduce((acc, lib) => {
  return {
    ...acc,
    [`^${lib}/(.+)`]: ([, name]) => {
      const src = name.replace(/^src/g, "dist");

      return `${lib}/dist/${src.replace(/^dist/g, "")}`;
    },
  };
}, {});

module.exports = {
  presets: ["next/babel", "@babel/preset-typescript"],
  plugins: [
    // ["transform-es2015-modules-commonjs"],
    [
      // ISSUE: Module path maps are not resolved in emitted code, https://github.com/microsoft/TypeScript/issues/10866
      // https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md
      // Alternative https://arunmichaeldsouza.com/blog/aliasing-module-paths-in-node-js
      "module-resolver",
      {
        root: ["."],
        alias,
      },
    ],
  ],
};
