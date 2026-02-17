import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/quiz-app",
    assetPrefix: "/quiz-app",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
