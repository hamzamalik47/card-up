/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.REACT_APP_PIC_DOMAIN],
  },
  env: {
    REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
    REACT_APP_PIC_BASE_URL: process.env.REACT_APP_PIC_BASE_URL,
    REACT_APP_PIC_DOMAIN: process.env.REACT_APP_PIC_DOMAIN,
    REACT_APP_PROJECT_NAME: process.env.REACT_APP_PROJECT_NAME,
    REACT_APP_WEB_API_KEY: process.env.REACT_APP_WEB_API_KEY,
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
