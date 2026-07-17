/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly OPEN_AI_BASE_URL?: string;
    readonly OPEN_AI_API_KEY?: string;
    readonly OPEN_AI_MODEL?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
