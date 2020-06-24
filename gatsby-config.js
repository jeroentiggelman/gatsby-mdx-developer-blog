const siteMetadata = {
  siteName: `The Localhost Blog`,
  description: `This is my coding blog where I write about my coding journey.`,
  image: `/default-site-image.jpg`,
  siteUrl: `https://gatsby-mdx-developer-blog.netlify.app`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@jeroentiggelman`,
  authorName: `Jeroen Tiggelman`,
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Poppins:400,700", "Pridi:400,700", "Space Mono:400,700"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-zeit-now`,
      options: {
        globalHeaders: {
          "referrer-policy": "same-origin",
          "feature-policy":
            "geolocation 'self'; microphone 'self'; camera 'self'",
          "expect-ct": "max-age=604800, enforce",
          "strict-transport-security": "max-age=31536000; includeSubDomains",
          "x-frame-options": "DENY",
          "x-xss-protection": "1; mode=block",
          "x-content-type-options": "nosniff",
          "x-download-options": "noopen",
        },
      },
    },
  ],
};
