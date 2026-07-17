import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [react(), tailwindcss(),],
        base: '/hack-portfolio/',
        define: {
            "import.meta.env.OPEN_AI_BASE_URL": JSON.stringify(env.OPEN_AI_BASE_URL),
            "import.meta.env.OPEN_AI_API_KEY": JSON.stringify(env.OPEN_AI_API_KEY),
            "import.meta.env.OPEN_AI_MODEL": JSON.stringify(env.OPEN_AI_MODEL),
        },
    };
})
