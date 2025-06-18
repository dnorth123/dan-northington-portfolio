/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: "https://dannorthington.com",
    NEXT_PUBLIC_LINKEDIN_URL: "https://linkedin.com/in/northington",
    NEXT_PUBLIC_EMAIL: "dan.northington@gmail.com",
    NEXT_PUBLIC_PHONE: "404-268-4002",
  },
};

module.exports = nextConfig;
