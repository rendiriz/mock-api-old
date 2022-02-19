// import remarkGfm from 'remark-gfm';
// const remarkGfm = require('remark-gfm');

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['remark-gfm', 'ui']);
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

module.exports = withPlugins([
  [
    withTM,
    {
      reactStrictMode: true,
    },
  ],
  [
    withMDX,
    {
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    },
  ],
]);
