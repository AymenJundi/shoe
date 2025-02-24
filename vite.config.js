import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({ 
  base: '/shoe/', // This should be outside the plugins array
  plugins: [tailwindcss()]
})