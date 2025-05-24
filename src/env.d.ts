interface ImportMetaEnv {
  readonly GOOGLE_CLIENT_ID: string;
  readonly GOOGLE_CLIENT_SECRET: string;
  readonly REDIRECT_URI: string;
  readonly LIGHT_AUTH_SECRET_VALUE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
