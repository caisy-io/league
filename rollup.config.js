import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        resolve,
        commonjs,
        typescript: require("typescript"),
        useTsconfigDeclarationDir: true,
        rollupCommonJSResolveHack: false,
        tsconfig: "tsconfig.build.json",
        clean: true,
      })
    ],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        banner: "/* eslint-disable */"
      }
    ]
  }
];
