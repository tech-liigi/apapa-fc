/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: "0kg37zhi",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_SECRET_TOKEN: "sk0ClOExD6HtwHOVeYodWrUQoGzAQtB6RxdbgefBzrRG7ByMr8QNYOsGne4CIvcV8OIHLZhXPshMw4Tf5PcfAW0UvgnfYmcYBSCVGwVYWzrbaDP1q0hO9y0ZMxIWrP7KTlj0JdYlILaV6nGxdwTX7dOABi4hlEhkbFTzkuL9Mq4r1RKQFWjr",
  },
};

export default nextConfig;
