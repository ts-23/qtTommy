import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./src/index.ts"],
  format: ["cjs", "esm"],
  external: ["react"],
  dts: true,
  banner: {
    js: "'use client'",
  },
  ...options,
}));
