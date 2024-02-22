/** @type {import('next').NextConfig} */

import config from 'dotenv';
config.config();

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:' + process.env.PORT_SERVER + '/:path*',
            },
        ];
    }
};

export default nextConfig;
