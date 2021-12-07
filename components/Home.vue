<template lang="pug">
	.layout__main
		.page1
			//-header(:banner="home.group_gallery")
			.page1__header
				section.section1
					.content
						//-VueSlickCarousel(v-bind="slick.mode1" class="content__list")
							.content__item(v-for="(item, index) in $t('home.banners')" :key="index" class="content__item")
								div(class="content__image" :style="{ backgroundImage: 'url(' + item.image + ')' }")

						//-agile(:options="agile.mode1" class="content__list")
							.content__item(v-for="(item, index) in $t('home.banners')" :key="index" class="content__item")
								div(class="content__image" :style="{ backgroundImage: 'url(' + item.image + ')' }")

						
						//-.content__list(v-swiper="swiper.mode1")
							.swiper-wrapper
								.swiper-slide(v-for="(item, index) in $t('home.banners')" :key="index" class="content__item")
									div(class="content__image" :style="{ backgroundImage: 'url(' + item.image + ')' }")
						
						//-swiper(ref="mySwiper3" :options="swiper.mode1" class="content__list")
							swiper-slide(v-for="(item, index) in $t('home.banners')" :key="index" class="content__item")
								div(class="content__image" :class="item.image")
								//div(class="content__image" :style="{ backgroundImage: 'url(' + item.image + ')' }")

						swiper(ref="mySwiper3" :options="swiper.mode1" class="content__list")
							swiper-slide(v-for="(item, index) in home.group_list_banners" :key="index" class="content__item")
								div(class="content__image" :style="{ backgroundImage: 'url(' + item.field_image_banners.url + ')' }")
								div(class="content__info")
									h2 {{ $prismic.asText(item.field_text1_banners) }}
									h4 {{ $prismic.asText(item.field_text2_banners) }}
									.link(v-if="item.field_link_banners.uid != undefined")
										nuxt-link(tag="a" :to="`/catalogo/${item.field_link_banners.uid}`") Leer mas

			
			.page1__main
				section.section1
					.align
						.section1__main
							hgroup
								h2 Servicios de pruebas médicas
							.content
								.content__list
									.item(v-for="(item, index) in home.group_list_services" :key="index")
										.item__image(v-lazy-container="{ selector: 'img' }")
											img(:data-src="item.field_image_services.url" alt="Not found")
										.item__info
											h3 {{ $prismic.asText(item.field_title_services) }}
											p {{ $prismic.asText(item.field_text_services) }}
										.item__link
											nuxt-link(tag="a" :to="`/${item.field_link_services.uid}`") Leer mas

				section.section2
					.align
						.section2__main
							hgroup
								h2 Proceso de las pruebas genéticas
							.content
								.content__list
									.item
										.item__step
											p(data-number="1")
										.item__info
											h3 Colección de la muestra
											p Sencilla y rápida, realizada por un profesional.
										//-.item__link
											a Leer mas

									.item
										.item__step
											p(data-number="2")
										.item__info
											h3 Análisis 
											p Realizado en laboratorios internacionales.
										//-.item__link
											a Leer mas

									.item
										.item__step
											p(data-number="3")
										.item__info
											h3 Obtención de resultados
											p Explicación personalizada con fundamento para cada prueba.
										//-.item__link
											a Leer mas

				section.section3
					.section3__main
						.content
							.content__image

							.content__info
								hgroup
									h4 Quienes somos
								p 
									| Empresa innovadora en pruebas genéticas implicada en el avance de las tecnologías con el fin de ofrecer los servicios más recientes en el campo de la genética. 
								br
								p
									| Nos encontramos trabajando día a día con certificaciones internacionales y profesionales capacitados para su labor a cualquier nivel y en plena disposición del cliente. Priorizamos el acercamiento de la ciencia a las manos de todos los peruanos. 

				section.section4
					.align
						.section4__main
							hgroup
								h2 Por qué elegirnos
							.content
								.content__list
									.item
										.item__info
											h3 01. Innovación
											p Ofrecemos análisis pioneros en el Perú, tales como el diagnostico en enfermedades genéticas complejas, tanto en personas como para sus mascotas.

									.item
										.item__info
											h3 02. Profesionalidad
											p Todas nuestras pruebas son llevadas a cabo por profesionales colegiados que avalan sus resultados y trabajan para la tranquilidad de usted y su familia.

									.item
										.item__info
											h3 03. Calidad
											p Nuestros análisis están entre los más avanzados del mercado, garantizando la máxima calidad a nuestros clientes.
											
				



</template>

<style scoped>
	img[lazy='loading'] {
	  filter: blur(15px);
	}
</style>

<script>

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import SwiperCore, { EffectFade,Navigation,Pagination,Autoplay } from 'swiper/core';

SwiperCore.use([EffectFade,Navigation,Pagination,Autoplay]);

//import HomeHeader from '~/components/Header.vue';
import prismicDOM from 'prismic-dom';

export default {
	//layout: 'main',
	props: ['home'],
	name: 'home',
	components: {
		//HomeHeader,
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
            delay: 8000,
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