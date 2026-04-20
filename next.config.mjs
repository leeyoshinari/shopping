/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
            {
                protocol: "http",
                hostname: "**",
            }
        ],
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
