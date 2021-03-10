import axios from 'axios'

const dynamicRoutes = async () => {
  const categories = await axios.get(`${process.env.URL}/my-category`)
  const tags = await axios.get(`${process.env.URL}/metki`)
  const posts = await axios.get(`${process.env.URL}/posts`)

  const routesForCategories = categories.data.map((item) => {
    return {
      route: `/categories/${item.acf.slug}`
    }
  })
  const routesForTags = tags.data.map((item) => {
    return {
      route: `/tags/${item.acf.slug}`
    }
  })
  const routesForPosts = posts.data.map((item) => {
    return {
      route: `/${item.acf.slug}`
    }
  })
  const routes = routesForCategories.concat(routesForTags).concat(routesForPosts)
  return routes
}

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'ru',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: 'deercode',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/manifest.json' }
    ]
  },
  loading: {
    color: '#2489f5',
    height: '3px'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/prism.js',
    '~/plugins/icons.js',
    { src: '~/plugins/nuxt-color-mode', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-fonts', {
      families: {
        'Open+Sans': {
          wght: [400, 700],
          ital: [400]
        }
      },
      display: 'swap'
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/color-mode',
    '@nuxtjs/axios'
  ],

  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: false,
    postcss: {
      preset: {
        autoprefixer: {
          grid: false
        }
      }
    },
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    },
    transpile: ['oh-vue-icons/icons'],
    babel: { compact: true }
  },
  generate: {
    routes: dynamicRoutes
  }
}
