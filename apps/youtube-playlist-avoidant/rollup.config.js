import { defineConfig } from 'rollup';
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';

const plugins = [
    nodeResolve(),
    commonjs(),
    typescript(),
];

const background = defineConfig({
    input: "src/background/background.ts",
    output: {
        file: "dist/background.js",
        format: "iife",
    },
    plugins,
    external: ["chrome-types"],
});

export default [background];

