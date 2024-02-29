/** @type {import('next').NextConfig} */

import config from 'dotenv';
config.config();

const nextConfig = {
    env : {
        HOST: process.env.HOST,
        PORT_SERVER: process.env.PORT_SERVER
    }
};

export default nextConfig;
