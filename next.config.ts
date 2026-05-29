import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/test-task-armageddon" : "";

const nextConfig: NextConfig = {
    ...(isProd ? { output: "export" } : {}),
    basePath,
    assetPrefix: basePath,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
