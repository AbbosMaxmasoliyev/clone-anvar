/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // Bu parametr Suspense bilan bog'liq xatoliklarni o'chiradi
        missingSuspenseWithCSRBailout: false,
    },

};

export default nextConfig;
