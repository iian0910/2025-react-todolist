import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: import.meta.env.NODE_ENV === 'production' ? '/2025-react-todolist/' : '/',
  plugins: [react()],
})
