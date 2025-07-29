import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  // ← add this line with your repo name
  base: '/Front_End_Project2/',
  plugins: [react()],
})
