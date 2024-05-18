/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async redirects() {
    return [
      {
        source: "/signin",
        destination: process.env.STORE_API + "/v1" + "/signin",
        permanent: false,
      },
      {
        source: "/verify",
        destination: process.env.STORE_API + "/v1" + "/verify",
        permanent: false,
      },
      {
        source: "/user-info",
        destination: process.env.STORE_API + "/v1" + "/user-info",
        permanent: false,
      },
    ];
  },
  publicRuntimeConfig: {
    STORE_API: process.env.STORE_API,
  },
};

export default nextConfig;
