/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oyster.ignimgs.com",
        port: "",
        pathname: "/mediawiki/**",
      },
    ],
  },
};

module.exports = nextConfig;
