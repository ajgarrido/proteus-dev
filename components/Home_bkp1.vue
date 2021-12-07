<template lang="pug">
	.layout__main
		.page1
			.page1__header
				section.section1
					.content
						//VueSlickCarousel(v-bind="slick.mode1" class="content__list")
							.content__item(v-for="(item, index) in $t('home.banners')" :key="index" class="content__item")
								div(class="content__image" :style="{ backgroundImage: 'url(' + item.image + ')' }")

						//agile(:options="agile.mode1" class="content__list")
							.content__item(v-for="(item, index) in $t('home.banners')" :key="index" class="content__item")
								div(class="content__image" :style="{ backgroundImage: 'url(' + item.image + ')' }")

						
						//.content__list(v-swiper="swiper.mode1")
							.swiper-wrapper
								.swiper-slide(v-for="(item, index) in $t('home.banners')" :key="index" class="content__item")
									div(class="content__image" :style="{ backgroundImage: 'url(' + item.image + ')' }")
						
						swiper(ref="mySwiper3" :options="swiper.mode1" class="content__list")
							swiper-slide(v-for="(item, index) in $t('home.banners')" :key="index" class="content__item")
								div(class="content__image" :class="item.image")
								//div(class="content__image" :style="{ backgroundImage: 'url(' + item.image + ')' }")
</template>

<script>

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import SwiperCore, { EffectFade,Navigation,Pagination,Autoplay } from 'swiper/core';

SwiperCore.use([EffectFade,Navigation,Pagination,Autoplay]);

export default {
	layout: 'main',
	name: 'home',
	components: {
    Swiper,
    SwiperSlide
  },
	data() {
		return {
			swiper:{
				mode1:{
					allowTouchMove: false,
					slidesPerView: 'auto',
	        spaceBetween: 0,
	        effect: "fade",
	        speed: 1000,
	        fadeEffect: {
				    crossFade: false
				  },
				  autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
	        loop: true
	        /*navigation: {
	          nextEl: ".swiper-button-next",
	          prevEl: ".swiper-button-prev",
	        },*/
				},
				mode21:{
					allowTouchMove: false,
					slidesPerView: 'auto',
					//freeMode: true,
					spaceBetween: 0,
					effect: "fade",
					fadeEffect: {
				    crossFade: true
				  },
				  autoplay: {
					  delay: 2000,
					},
					/*autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },*/
	        /*pagination: {
	          el: '.section1 .swiper-pagination',
	          //dynamicBullets: true,
	          clickable: true
	        },*/
	        /*navigation: {
	          nextEl: '.section3 .swiper-button-next',
	          prevEl: '.section3 .swiper-button-prev',
	          clickable: true
	        }*/
				},
				mode2:{
					/*slidesPerView: 1,
	        spaceBetween: 0,
	        slidesPerGroup: 1,
	        effect:'fade',
	        loop: true,
	        loopFillGroupWithBlank: true,*/
	        allowTouchMove: false,
					slidesPerView: 'auto',
					effect:'fade',
					//freeMode: true,
					//spaceBetween: 0,
					/*effect: 'fade',
				  fadeEffect: {
				    crossFade: true
				  },*/
        	loop: true,
					//effect: 'fade',
				  /*fadeEffect: {
				    crossFade: true
				  },*/
					autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
	        /*pagination: {
	          el: '.section1 .swiper-pagination',
	          //dynamicBullets: true,
	          clickable: true
	        },
	        navigation: {
	          nextEl: '.section1 .swiper-button-next',
	          prevEl: '.section1 .swiper-button-prev',
	          clickable: true
	        }*/
				}
			}
		}
	}
}

</script>