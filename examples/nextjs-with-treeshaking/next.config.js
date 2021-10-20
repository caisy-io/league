/** @type {import('next').NextConfig} */
   
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE !== undefined,
})

module.exports = withBundleAnalyzer({
  distDir: 'build',
  reactStrictMode: true,
})