let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

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
            `Nanum Pen Script`,
            `Open Sans`,
            `source sans pro\:300,400,400i,700` 
          ]
        }
    },
    {
      resolve: "@horacioh/gatsby-theme-instagram",
      options: {
        username: "mikeroseillustrations",
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_PROJECT_DATASET,
        watchMode: true
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN
      }
    },
    {
      resolve: 'gatsby-theme-stripe-checkout-button',
      options: {
        STRIPE_API_KEY: process.env.STRIPE_API_KEY,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        siteUrl: 'https://localhost:8000'
      }
    },
      'gatsby-plugin-theme-ui'
    ],
  }