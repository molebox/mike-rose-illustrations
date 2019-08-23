module.exports = {
  siteMetadata: {
    title: 'Mike Rose Illustrations',
    description: 'Official site of the illustrator Mike Rose',
    siteUrl: 'https://www.mikeroseillustrations.com',
    instagram: '@mikeroseillustrations',
    keywords: [
      'illustrator',
      'blog',
      'art'
    ],
  },
    plugins: [
      `gatsby-plugin-emotion`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-robots-txt`,
      {
        resolve: 'gatsby-plugin-google-fonts',
        options: {
          fonts: [
            `Rock Salt`,
            `Open Sans`,
            `source sans pro\:300,400,400i,700` 
          ]
        }
    },
      'gatsby-plugin-theme-ui'
    ],
  }