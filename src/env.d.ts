interface ImportMeta {
  readonly env: {
    readonly BASE_URL: string;
    readonly MODE: string;
    readonly PROD: boolean;
    readonly DEV: boolean;
    // Добавьте другие переменные окружения, если используются
  };
}
