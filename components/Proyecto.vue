<template lang="pug">
	.layout__main
		.page2
			.page2__header.bg3
			.page2__main
				section.section1
					.align
						.section1__main
							hgroup
								h3 {{ $t('proyecto.titulo') }}
							mq-layout(mq="tablet-h+")
								swiper(ref="mySwiper3" :options="swiper.mode1" class="content" @slideChange="changeSwiperIndex")
									swiper-slide(v-for="(item, index) in $t('proyecto.content')" :key="index" :ref="index" class="content__info")
										div.block(v-if="item.video" @click="openVideo($t('proyecto.documental'))")
											span.block__main(v-html="item.info")
											a()
										div.block(v-else)
											span.block__main(v-html="item.info")
								.buttons
									span(v-if="slide == 0") {{ textoproyecto }}
									button.btn_prev <  
									button.btn_next >
							mq-layout(:mq="['tablet', 'movil-h', 'movil']")
								.content__info(v-for="(item, index) in $t('proyecto.content')" :key="index")
									div.block(v-if="item.video" @click="openVideo($t('proyecto.documental'))")
										span.block__main(v-html="item.info")
										a()
									div.block(v-else)
										span.block__main(v-html="item.info")
							//-.content

								.content__info(v-html="$t('proyecto.info')")
								.content__video
									.title
										h3 {{ $t('proyecto.textodocumental') }}
										p {{ $t('proyecto.textohoytecanto') }}
									a(@click="openVideo($t('proyecto.documental'))")


</template>

<script>

import { Swiper, SwiperSlide  } from "vue-awesome-swiper";
import SwiperCore, { EffectFade,Navigation,Pagination,Autoplay } from 'swiper/core';

SwiperCore.use([EffectFade,Navigation,Pagination,Autoplay]);

export default {
	//transition: 'component-fade',
	/*async asyncData () {
		const {data} = await axios.get('/posts')
		return {articles:data}
	},*/
	layout: 'main',
	name: 'proyecto',
	transition: 'page',
	components: {
		Swiper,
		SwiperSlide
	},
	/*head () {
		return {
			title: 'Bicentenario - ¡Un regalo para el Perú!',
			meta: [
					{ hid: 'description', name: 'description', content: 'Junto a Lucho Quequezana creamos este proyecto para cantarle juntos al Perú por lo vivido y por lo que viene, y para que hagamos realidad el país que todos queremos. ' },
					{ name: 'keywords', content: 'bicentenario, canción, fiestas patrias, lucho quequezana, claro'},
			]
		}
	},*/
	data() {
		return {
			textoproyecto: this.$t('proyecto.textoproyecto'),
			slide: 0,
			swiper:{
				mode1:{
					/*slidesPerView: 1,
					spaceBetween: 0,
					slidesPerGroup: 1,
					effect:'fade',
					loop: true,
					loopFillGroupWithBlank: true,*/
					allowTouchMove: false,
					slidesPerView: 1,
					//freeMode: true,
					//spaceBetween: 0,
					effect: 'fade',
					fadeEffect: {
						crossFade: true
					},
					navigation: {
						nextEl: ".btn_next",
						prevEl: ".btn_prev",
					}
					//loop: true,
					//effect: 'fade',
					/*fadeEffect: {
						crossFade: true
					},*/
					/*autoplay: {
						delay: 5000,
						disableOnInteraction: false
					},*/
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
	},
	mounted(){
		//console.log("ref",this.$refs.mySwiper3.$swiper.activeIndex);
	},
	methods:{
		openVideo(url){
			$nuxt.$emit('showVideo',url);
		},
		changeSwiperIndex () { 
			this.slide = this.$refs.mySwiper3.$swiper.activeIndex;
			//console.log("slide", this.$refs.mySwiper3.$swiper.activeIndex)
			//return this.$refs.mySwiper3.$swiper.activeIndex
		}
	}
	
}
</script>