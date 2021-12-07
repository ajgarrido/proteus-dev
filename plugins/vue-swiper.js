import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

//import 'swiper/swiper.scss'
//import "swiper/components/effect-fade/effect-fade.min.css"

import SwiperCore, {
  EffectFade,Navigation,Pagination,Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFade,Navigation,Pagination,Autoplay]);

Vue.use(VueAwesomeSwiper)