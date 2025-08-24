import netlify from '@netlify/vite-plugin';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(command, mode);

  return {
    plugins: [
      netlify(), // comment me out to see how `vite dev` *should* behave
    ],
  };
});
