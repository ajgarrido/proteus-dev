<template lang="pug">
	.page1__header
		section.section1
			.section1__align
				.section1__main
					.content
						swiper(ref="mySwiper3" :options="swiper.mode1" class="content__list")
							swiper-slide(v-for="(item, index) in banner" :key="index" class="content__item")
								div(class="content__image" :style="{ backgroundImage: 'url(' + item.field_image_gallery.url + ')' }")
								div(class="content__info")
									h2 {{ $prismic.asText(item.field_text1_gallery) }}
									h4 {{ $prismic.asText(item.field_text2_gallery) }}
									.link
										nuxt-link(tag="a" :to="`/catalogo/${item.field_link_gallery.uid}`") Me interesa
							.swiper-pagination(slot="pagination")
						.swiper-button-prev(slot="button-prev")
						.swiper-button-next(slot="button-next")
					.social
						.social__title
							h6 Síguenos en las redes sociales
							span
						.social__links
							//a.ico_youtube
							//a.ico_linkedin
							a.ico_instagram(href="http://www.google.com" target="_blank")
							a.ico_facebook(href="http://www.google.com" target="_blank")
</template>

<script>

export default {
  props: ['banner'],
  name: 'home-header',
  data() {
		return {
			swiper:{
				mode1:{
					slidesPerView: 1,
					//freeMode: true,
					spaceBetween: 0,
					effect: "fade",
					loop : true,
					autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
	        pagination: {
	          el: '.section1 .swiper-pagination',
	          //dynamicBullets: true,
	          clickable: true
	        },
	        navigation: {
	          nextEl: '.section1 .swiper-button-next',
	          prevEl: '.section1 .swiper-button-prev',
	          clickable: true
	        }
				}
			}
		}
	}
}

</script>