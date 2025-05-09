import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://josephh2o.github.io/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This will expose the server to your network
  },
})
