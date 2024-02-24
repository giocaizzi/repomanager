/** @type {import('next').NextConfig} */

import config from 'dotenv';
config.config();

const nextConfig = {
    rewrites: async() => {
        return [
            {
                source: '/api/:path*',
                destination: 'http://127.0.0.1:' + String(process.env.PORT_SERVER) + '/:path*',
            },
        ];
    }
};

export default nextConfig;
