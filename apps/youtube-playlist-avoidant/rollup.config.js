import { defineConfig } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";

const plugins = [
    nodeResolve(),
    commonjs(),
    typescript(),
    replace({
        preventAssignment: true,
        values: {
            "process.env.NODE_ENV": JSON.stringify("production")
        }
    }),
];

const background = defineConfig({
    input: "src/background/background.ts",
    output: {
        file: "dist/background.js",
        format: "iife"
    },
    plugins,
    external: ["chrome-types"],
});

const options = defineConfig({
    input: "src/options/options.ts",
    output: {
        file: "dist/options.js",
        format: "iife"
    },
    plugins,
    external: ["chrome-types"],
});

export default [background, options];
