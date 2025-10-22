import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ['@beyondequity/ui', '@beyondequity/types', '@beyondequity/portfolio'],
}

export default nextConfig
