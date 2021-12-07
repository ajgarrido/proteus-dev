<template lang="pug">
  .layout
    //-transition(name="fade", mode="out-in")
      Screen(v-if="getscreen")
    //-Aside
    Header
    NavMenu
    Nuxt
    Footer
    //-ModalVideo
</template>

<script>

//import Aside from '~/components/Aside.vue'

import NavMenu from '~/components/NavMenu.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
//import Screen from '~/components/Screen.vue'
//import ModalVideo from '~/components/ModalVideo.vue'

import { mapGetters } from 'vuex';

export default {
  components: {
    //Screen,
    //Aside,
    NavMenu,
    Header,
    Footer
    //ModalVideo
  },
  computed:{
    ...mapGetters({
      getscreen: 'getScreen'
    })
  }

}

</script>

<style>
  .fade-enter-active, .fade-leave-active{
    transition: opacity .5s 
  }
  .fade-enter, .fade-leave-to{
    opacity: 0
  }
</style>