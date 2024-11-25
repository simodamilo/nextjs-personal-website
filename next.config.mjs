import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs-personal-website' : '',
  optimizeCss: false, 
  enableBabelRuntime: true
};

export default withNextIntl(nextConfig);
