const dev = process.env.APP_ENV !== 'production';

export const server = dev ? 'http://localhost:8000' : 'https://my-website.com';