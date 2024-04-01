import { defineConfig } from "astro/config";
import million from "million/compiler";
import MillionCompiler from "@million/lint";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      million.vite({ mode: "react", server: true, auto: true }),
      MillionCompiler.vite(),
    ],
  },
});
