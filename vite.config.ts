import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  build: {
    rolldownOptions: {
      output: {
        entryFileNames: 'app-[hash].js',
        codeSplitting: {
          groups: [
            {
              name: 'mui-emotion',
              test: /node_modules[\/](@mui|@emotion)[\/]/,
              priority: 2,
            },
            {
              name: 'vendor',
              test: /node_modules[\/]/,
              priority: 1,
            },
          ],
        },
      },
    },
  },
});
