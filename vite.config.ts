import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron({
      main: {
        entry: 'src/electron/main.ts',
      },
      preload: {
        input: 'src/electron/preload.ts'
      }
    })
  ]
})
