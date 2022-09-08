/** @type {import('next').NextConfig} */
const env = {
  REACT_APP_BASE_URL_AUTH: process.env.REACT_APP_BASE_URL_AUTH,
  REACT_APP_X_HASURA_ADMIN_SECRET:process.env.REACT_APP_X_HASURA_ADMIN_SECRET
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env
}

module.exports = nextConfig
