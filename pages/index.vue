<template lang="pug">
  Home(:home="home")
</template>

<script>

import Home from '~/components/Home.vue'

export default {
  name: 'home-index',
  layout: 'main',
  transition: 'page',
  head () {
    return {
      title: 'Proteus Laboratorio',
      meta: [
          { hid: 'description', name: 'description', content: 'Proteus Laboratorio' },
          { name: 'keywords', content: 'Proteus, Laboratorio'},
      ]
    }
  },
  components: {
    Home
  },
  async asyncData({ $prismic, error, app }) {

    const home = (await $prismic.api.getSingle('home')).data

    const arbol = [];

    if (home) {
      console.log("detail home",home);

      return {
        home: home
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

