module.exports = {
  mount: {
    src: '/',
    assets: '/',
  },
  plugins: [
    ['@snowpack/plugin-react-refresh'],
    ['@snowpack/plugin-typescript'],
    ['@snowpack/plugin-postcss'],
    ['@jadex/snowpack-plugin-tailwindcss-jit'],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
};
