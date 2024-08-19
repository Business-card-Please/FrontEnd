/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_DEV_MAIN_API: process.env.NEXT_PUBLIC_DEV_MAIN_API,
    NEXT_PUBLIC_LOCAL_MAIN_API: process.env.NEXT_PUBLIC_LOCAL_MAIN_API
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']

};

export default nextConfig;
