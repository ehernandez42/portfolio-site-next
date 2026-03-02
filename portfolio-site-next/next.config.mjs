/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            new URL('https://substackcdn.com/**')
        ]
    }
};

export default nextConfig;
