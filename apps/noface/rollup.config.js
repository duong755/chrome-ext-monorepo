import { defineConfig } from 'rollup';
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import typescript from "@rollup/plugin-typescript";

const plugins = [
    nodeResolve(),
    commonjs(),
    typescript(),
];

const facebook = defineConfig({
    input: "src/scripts/facebook.ts",
    output: {
        file: "dist/facebook.js",
        format: "iife"
    },
    plugins,
    external: ["chrome-types"],
});

const messenger = defineConfig({
    input: "src/scripts/messenger.ts",
    output: {
        file: "dist/messenger.js",
        format: "iife"
    },
    plugins,
    external: ["chrome-types"],
});

export default [facebook, messenger];
