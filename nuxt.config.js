import hljs from 'highlight.js'
import md from 'markdown-it'
console.log('markdown',md)
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'KIM DO WOO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Kim Dowoo's Nuxt.js project for portfolio` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'assets/main.scss',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    ['nuxt-fontawesome', 
      {
        imports: 
        [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
  ** @nuxtjs/markdownit option  
  */
  markdownit: {
    injected: true,
    linkify: true,
    breaks: true,
    emoji: true,
    // highlight: function (str, lang) {
    //   if (lang && hljs.getLanguage(lang)) {
    //     try {
    //       return '<pre class="hljs"><code>' +
    //         hljs.highlight(lang, str, true).value +
    //         '</code></pre>';
    //     } catch (__) {}
    //   }
  
    //   return '<pre class="hljs"><code>' + md.util.escapeHtml(str) + '</code></pre>';
    // },
    use: [
      'markdown-it-div',
      'markdown-it-attrs',
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

