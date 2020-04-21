module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      // ISSUE: Module path maps are not resolved in emitted code, https://github.com/microsoft/TypeScript/issues/10866
      // https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md
      // Alternative https://arunmichaeldsouza.com/blog/aliasing-module-paths-in-node-js
      "module-resolver",
      {
        root: ["."],
        alias: {
          "^@mono/lib/(.+)": "@mono/lib/dist/\\1",
        },
      },
    ],
  ],
};
