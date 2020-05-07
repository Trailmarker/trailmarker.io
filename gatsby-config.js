const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Trailmarker',
    author: 'Tom Lynch',
    description: 'Trailmarker website based on the Forty theme by HTML5 UP',
  },
  pathPrefix: "/trailmarker.io.new",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-theme-forty',
        short_name: 'theme',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/beige.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
