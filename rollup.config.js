import alias from '@rollup/plugin-alias';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import images from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy';
import path from "node:path";

const pkg = require("./package.json");
export default {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        alias({
            entries: [
                { find: "@assets", replacement: "./assets/images" },
            ]
        }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        postcss({
            autoModules: true,
            extract: false,
        }),
        images(),
        copy({
            targets: [
                {
                    src: path.resolve(__dirname, "./styles/main.scss"),
                    dest: "dist",
                    rename: "index.scss"
                },
                {
                    src: path.resolve(__dirname, "./styles/fonts.scss"),
                    dest: "dist",
                }
            ]
        })
    ],
};
