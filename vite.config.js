import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({ 
  base: './', // This should be outside the plugins array
  plugins: [tailwindcss()]
})
