## `@netlify/vite-plugin` serves `dist` issue

### Reproduction

1. `npm run dev` (runs `vite dev`)
2. See that the version of `index.html` in `./dist` gets served, not the root version
3. Comment out the `netlify()` plugin in `vite.config.js`
4. See that the root version gets served with regular `vite dev` behaviour