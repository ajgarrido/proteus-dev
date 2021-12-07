//import Prismic from 'prismic-javascript'
//import i18n from './config/i18n'

/*import { localize } from 'vee-validate';
import ar from 'vee-validate/dist/locale/ar.json';

// Install and Activate the Arabic locale.
localize('ar', ar);*/

export default {
  //mode: 'universal',
  //mode: 'spa',
  ssr: false,
  target: 'static',

  sitemap: {
    hostname: process.env.HOSTNAME,
    gzip: true,
    exclude: [
      '/preview'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  /*render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },*/
  render:{
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      //{ src: 'jquery.js', body: true },
      //{ src: 'magiczoomplus.js', body: true }
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', body: true },
    ]
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  /*layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  pageTransition: {
    name: 'layout',
    mode: 'out-in'
  },*/
  /*pageTransition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...');
    }
  },*/
  generate: {
    //fallback: true
    //subFolders: false
    /*cache: {
      ignore: ['guides'] // changes in the guides folder will not cause a re-build
    },*/
    routes: async () => {

      /*const client = await Prismic.client(options.endpoint);
      const routes = []
      let next
      let page = 1



      do {
        let documents = await api.query('', { pageSize: 1, page})

        routes = routes.concat(documents.results.map(moduleOptions.linkResolver))

        next = documents.next_page
        page ++;
      } while (next)

      this.options.generate.routes = routes




      const api = await Prismic.getApi(process.env.PRISMIC_REF)
      const catalogo = await api.query(Prismic.Predicates.at("document.type", "productos"), {
        pageSize: 100
      })
      return catalogo.results.map(producto => `/catalogo/${producto.uid}`)*/

      return []
    }
    
    //routes: ['/musicos/abiud-mucha-meza', '/musicos/alma-moron', '/musicos/chicho-cavero','/es/musicos/abiud-mucha-meza', '/es/musicos/alma-moron', '/es/musicos/chicho-cavero']
  },
  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },   // other configs 
  router: {
    //middleware: ['schedule'],
    //base: 'planesespeciales.claro.com.pe'
    //base: '/landings/havas/2021/bicentenario/v1/',
    //base: '/dist/'
    //base: '/proyectos/anandraropa/',
    //base: '/new/',
    //prefetchLinks: false,
    base: '/',
    //mode: 'hash',
    //linkActiveClass: 'menu-active',
    extendRoutes (routes, resolve) {
      routes.push({
        path: '*', redirect: '/'
      })
    }
  },
  //srcDir: 'cliente/',
  /*
  ** Customize the progress-bar color
  */
  //loading: false,
  //loading: { color: '#ffffff' },
  loading: {
    name: 'chasing-dots',
    color: '#333333',
    background: 'white',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
    // CSS file in the project
    //'@/assets/css/main.css',
    // SCSS file in the project
    //'swiper/swiper.scss',assets\scss\library\fontawesome-pro\css
    //'@/assets/scss/library/fontawesome-pro/css/fontawesome.css',
    'swiper/swiper-bundle.min.css',
    '@/assets/scss/common.scss'
    //'vue-slick-carousel/dist/vue-slick-carousel.css',
    //'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  ],

  //css: ['vue-slick-carousel/dist/vue-slick-carousel.css'],
  /*styleResources: {
    scss: ["~assets/scss/common.scss"]
  },*/
  /*
  ** Plugins to load before mounting the App
  */
  pwa: {
    icon: false // disables the icon module
  },
  plugins: [
    //{ src: '~/plugins/core', mode: 'client' },
    { src: '~/plugins/lodash', mode: 'client' },
    { src: '~/plugins/validate', mode: 'client' },
    //{ src: '~/plugins/router', mode: 'client' },
    { src: '~/plugins/vmodal', mode: 'client' },
    { src: '~/plugins/vue-click-outside', mode: 'client' },
    //{ src: '~/plugins/vue-agile', mode: 'client' },
    //{ src: '~/plugins/i18n', mode: 'client' },
    //{ src: '~/plugins/firebase', mode: 'client' ,ssr: false },
    //{ src: '~/plugins/vue-slick-carousel', mode: 'client' },
    //{ src: '~/plugins/vue-sticky', mode: 'client' },
    //{ src: '~/plugins/vue-isotope', mode: 'client' },
    { src: '~/plugins/vue-backtop', mode: 'client' },
    //{ src: '~/plugins/vue-autocomplete', mode: 'client' },
    { src: '~/plugins/vue-imagesLoaded', mode: 'client' },
    //{ src: '~/plugins/vue-magiczoomplus', mode: 'client' ,ssr: false },
    //{ src: '~/plugins/vue-swiper', mode: 'client' },
    { src: '~/plugins/vue-lazy', mode: 'client' },
    //{ src: '~/plugins/lightGallery.client', mode: 'client' },
    //{ src: '~/plugins/chat', mode: 'client' },
    //{ src: '~/plugins/vue_google_analytics', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@aceforth/nuxt-optimized-images',
    '@/modules/generator',
    '@nuxtjs/google-analytics',
    '@nuxtjs/device'
    /*['nuxt-i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true,  // recommended
        },
        vueI18nLoader: true,
        strategy: 'prefix',
        skipSettingLocaleOnNavigate: true,
        locales: [
          {
             code: 'es',
             file: 'es-ES.js',
             name: 'Español'
          },
          {
             code: 'qu',
             file: 'qu-PE.js',
             name: 'Quechua'
          },
          {
             code: 'ay',
             file: 'ay-PE.js',
             name: 'Aymara'
          }
        ],
        lazy: false,
        langDir: 'lang/',
        defaultLocale: 'es'
      }
    ]*/
  ],
  device: {
    defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36',
    refreshOnResize: true
  },
  googleAnalytics: {
    id: 'UA-201804663-1',
    debug: {
      enabled: false,
      // sendHitTask: true
    }    
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/recaptcha',
    '@nuxtjs/gtm',
    'nuxt-webfontloader',
    'nuxt-validate',
    'vue-social-sharing/nuxt',
    ['nuxt-mq', {
      //defaultBreakpoint: 'sm',
      breakpoints: {
        //'sm' : 0 > window.screen.width < 450,
        'movil'     : 426,
        'movil-h'   : 569,
        'tablet'    : 769,
        'tablet-h'  : 1025,
        'tablet-w'  : 1342,
        'laptop'    : 1367,
        'laptop-w'  : 1441,
        'desktop'   : Infinity
      }
    }],
    ['@nuxtjs/prismic', { apiOptions: { accessToken: process.env.PRISMIC_TOKEN } }],
    '@nuxtjs/pwa',
    ['@nuxtjs/html-minifier', { log: 'once', logHtml: true }],
    '@nuxtjs/sitemap'
  ],
  gtm: {
    id: 'GTM-PPT2TBC'
  },
  prismic: {
    //endpoint: 'https://anandra.cdn.prismic.io/api/v2',
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer'
  },
  recaptcha: {
    hideBadge: true, // Hide badge element (v3)
    siteKey: '6Le-6poUAAAAAPbrsY79XwKMDjW9PkwVZAU36Fxz',    // Site key for requests
    version: 3     // Version
  },
  toast: {
    position: 'top-center',
    duration: 1000,
    singleton: true,
    theme:'bubble',
    closeOnSwipe: false
    /*register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]*/
  },
  /*nuxtValidate: {
    lang: 'es',
    nuxti18n: {
      locale: {
        'zh-CN': 'zh_CN'
      }
    }
  },*/
  webfontloader: {
    custom: {
        families: [
            //'slick',
            //'FontAwesome',
            'Poppins',
            'Lato:n4,n7',
            'Open Sans:n3,n4',
            'Roboto:n3,n7,n9'
        ],
        urls: [
            // for each Google Fonts add url + options you want
            // here add font-display option
            //'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/fonts/slick.woff',
            //'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
            'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            'https://fonts.googleapis.com/css?family=Lato:400,700&display=swap',
            'https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap',
            'https://fonts.googleapis.com/css?family=Roboto:300,700,900&display=swap'
        ]
    },
    /*google: {
      families: ['Lato:400,700'] //Loads Lato font with weights 400 and 700
    }*/
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
   /*
  ** Environment Variables
  */
  env: {
    //prismic_to: 
    //expired: 0.5,
    //apiBaseUrl: 'https://52.170.213.127/api',
    //apiBaseUrl: '/api'  
  },
  /*
  ** Build configuration
  */
  /*build: {
    //
    //** You can extend webpack config here
    //
    //analyze: true,
    //vendor: [
    //  '@fortawesome/fontawesome',
    //  '@fortawesome/fontawesome-free-solid',
    //  '@fortawesome/fontawesome-free-brands'
    //],
    //vendor: ['vue-js-modal'],
    extend (config, ctx) {
    }
  },*/
  optimizedImages: {
    optimizeImages: true
  }

}
