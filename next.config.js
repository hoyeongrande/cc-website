/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require("next-transpile-modules")([]);

module.exports = withTM({
    reactStrictMode: true,
    
    images: {
        domains: ['https://images.unsplash.com/'],
    },
});
