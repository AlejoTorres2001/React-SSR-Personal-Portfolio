/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify is enabled by default in Next.js 15
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.badgr.io',
        pathname: '**',
      },
      // Add other remote image sources if needed
    ],
    dangerouslyAllowSVG: true,
  contentDispositionType: 'attachment',
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Optional: add transpilation for problematic packages
  transpilePackages: ['react-elastic-carousel'],
}

module.exports = nextConfig