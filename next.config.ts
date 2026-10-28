import type { NextConfig } from "next";

// Currently served from reload.github.io/biblogo, so assets need the /biblogo prefix.
// TODO: once a custom domain is set up (with a public/CNAME file), switch to the line below instead:
// const basePath = "";
const basePath = "/biblogo";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  // Ensure static export generates trailing slashes for directories
  trailingSlash: true,
  // Disable Next.js image optimization for static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
