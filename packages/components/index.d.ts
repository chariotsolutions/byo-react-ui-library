declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    BUILD_WATCH?: "true" | "false";
  }
}
