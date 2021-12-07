<template lang="pug">
	.layout__header
		.section1
			.align
				.section1__main
					nuxt-link(tag="a" class="logo" to="/")
					.content
						//dl
							dt.result
							dd
								blockquote
									h4 Progreso del exámen
									p.progress 
										a revisar
						dl
							dt.phone
							dd
								blockquote
									h4 955 161 002
									p 
										a Área de Salud

								blockquote
									h4 955 160 598
									p 
										a Área Veterinaria
						dl
							dt.clock
							dd
								blockquote
									h4 7:00 - 18:00
									p 
										a Lunes - Viernes
								blockquote
									h4 8:00 - 13:00
									p 
										a Sábados

</template>

<script>

export default {
  //props: ['banner'],
  //props: ['banner'],
  name: 'home-header',
  data() {
		return {
			/*swiper:{
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
			}*/
		}
	}
}

</script>