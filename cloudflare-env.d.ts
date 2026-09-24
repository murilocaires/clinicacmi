declare module "cloudflare:workers" {
  export const env: {
    DB?: D1Database | unknown;
    BUCKET?: R2Bucket | unknown;
  };
}

declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
  }
}
