/**
 * Sanity environment variables.
 *
 * Note: we intentionally fall back to empty strings when env vars are
 * missing so the public site can still render seeded fallback content.
 * The `/studio` route itself will surface a clear "configure your project"
 * error from Sanity if the variables are missing — that is the intended
 * behaviour, since the studio is unusable without real credentials.
 */

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-09-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "sulighdq";

export const writeToken = process.env.SANITY_API_WRITE_TOKEN;

export const studioBasePath = "/studio";

export const isSanityConfigured = false;