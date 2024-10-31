/**
 * Service version configuration
 */

// Semantic version of the service
const VERSION = "1.0.0";

// Build information
const BUILD_INFO = {
  timestamp: new Date().toISOString(),
  environment: process.env.NODE_ENV || 'development'
};

interface ServiceConfig {
  readonly name: string;
  readonly version: string;
  readonly buildInfo: typeof BUILD_INFO;
}

export const serviceConfig: ServiceConfig = {
  name: "user-service",
  version: VERSION,
  buildInfo: BUILD_INFO,
} as const;

// Helper function to get version info as a string
export const getVersionInfo = (): string => {
  return `${serviceConfig.name}@${serviceConfig.version}`;
};
