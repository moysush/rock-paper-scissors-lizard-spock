import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rock-paper-scissors-lizard-spock/',
  plugins: [react()],
})
