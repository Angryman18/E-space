/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async redirects() {
    return [
      {
        source: "/:path",
        destination: process.env.STORE_API + "/v1" + "/:path",
        permanent: false,
      }
    ];
  },
images: {
  remotePatterns: [{
    hostname: "**",
  }]
},
  publicRuntimeConfig: {
    STORE_API: process.env.STORE_API,
    SSO_URL: process.env.NEXT_PUBLIC_SSO_URL,
  },
};

export default nextConfig;
