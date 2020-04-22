# ヾ(⌐■_■)ノ♪ 
https://www.mixcloud.com/Dr_Rob/

## 📦Works also with babel module path resolvers if you have deep relative path imports in any package 
ISSUE: Module path maps are not resolved in emitted code, https://github.com/microsoft/TypeScript/issues/10866

```json{
  "name": "mononext",
  "workspaces": [
    "packages/*"
  ],
  "private": true,
  "scripts": {
    "build:types": "tsc -b packages/**/tsconfig.build.json",
    "clean": "rm -rf packages/**/dist* && tsc --build --clean",
    "clear": "yarn clean && rm -rf packages/*/node_modules && rm -rf yarn.lock && yarn",
    "lint": "eslint 'packages/**/*.{ts,tsx}'",
    "lint:fix": "yarn lint --fix",
    "compile": "tsc --noEmit",
    "dev": "yarn --cwd packages/mono.web dev",
    "start": "yarn --cwd packages/mono.web start",
    "start:api": "yarn --cwd packages/mono.api start",
    "build": "yarn clean && yarn build:types && lerna run build"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/preset-env": "^7.9.5",
    "@babel/preset-typescript": "^7.9.0",
    "babel-plugin-module-resolver": "^4.0.0",
    "lerna": "^3.20.2"
  }
}
```

# Links
https://dev.to/shnydercom/monorepos-lerna-typescript-cra-and-storybook-combined-4hli

https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d

