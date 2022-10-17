import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/coffeestop/',
  plugins: [react()],
  build: {
    // emptyOutputDir: false,
	  target: "esnext",
    
  }
})
