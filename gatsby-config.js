module.exports = {
  siteMetadata: {
    title: `The Localhost Blog`,
    description: `This is my coding blog where I write about my coding journey.`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 540,
            },
          },
        ],
        plugin: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 540,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};
