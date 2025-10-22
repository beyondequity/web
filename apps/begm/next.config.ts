import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['@beyondequity/ui', '@beyondequity/types', '@beyondequity/portfolio'],
}

export default nextConfig
