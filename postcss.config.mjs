/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    "postcss-import": {},
    "tailwindcss/nesting": {},
  },
  /* experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  }, */
};

export default config;
