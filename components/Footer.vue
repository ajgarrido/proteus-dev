<template lang="pug">
	.layout__footer
		section.section1
			.align
				.section1__main
					hgroup
						h2 Revisa el progreso
						h4 del exámen que has realizado
						a(@click="openModal()") Ver
		section.section2
			.align
				.section2__main
					.content
						.content__company
							nuxt-link(tag="div" class="logo" to="/")
							blockquote
								p 
									| Empresa innovadora en pruebas genéticas implicada en el avance de las tecnologías con el fin de ofrecer los servicios más recientes en el campo de la genética.
						.content__info
							hgroup
								h4 Información
							.menu
								.menu__list
									a.active 
										span Inicio
									a 
										span Paternidad
									a 
										span Parentesco
									a 
										span Enfermedades geneticas
									a 
										span Otros
									a 
										span Mascotas

						.content__contact
							hgroup
								h4 Contáctanos
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

							dl
								dt.email
								dd
									blockquote
										h4 informes@proteus-lab.com
										p 
											a Email


				.section2__footer
					.content
						.content__info
							h4 COPYRIGHT © 2021 TODOS LOS DERECHOS RESERVADOS.

			//-.section1__left
				mq-layout(mq="tablet-h+")
					Countdown(date="Jul 24, 2021 20:00:00" v-if="getcountdown")
						template(v-slot:counter="{ days, hours,minutes, seconds }")
							.counter
								.counter__header
									h5 {{ $t('contador.solofaltan') }}
								.counter__main
									.block.transparent
										hgroup
											h3 {{ days }}
											h6 {{ $t('contador.dias') }}
						
									.block
										hgroup
											h3 {{ hours }}
											h6 {{ $t('contador.horas') }}
							
									.block
										hgroup
											h3 {{ minutes }}
											h6 {{ $t('contador.minutos') }}
							
									.block.transparent
										hgroup
											h3 {{ seconds }}
											h6 {{ $t('contador.segundos') }}
								.counter__footer
									h5 {{ $t('contador.estrenocancion') }}
			//-.section1__main
				.content
					mq-layout(mq="tablet-h+")
						.content__info(@click="linkCalendar()" v-if="getcancion")
							hgroup
								h3 {{ $t('general.agenda') }}
					mq-layout(:mq="['tablet', 'movil-h', 'movil']")
						.content__info(@click="linkCalendar()" v-if="getschedule")
							hgroup
								h3 {{ $t('general.agenda') }}
			//-.section1__right
				.content
					mq-layout(mq="tablet-h+")
						nuxt-link(:to="localePath($t('menu[1].url'))" class="content__info" v-if="getteaser")
							hgroup
								h3 {{ $t('general.teaser') }}
					//-mq-layout(:mq="['tablet', 'movil-h', 'movil']")
						nuxt-link(:to="localePath($t('menu[1].url'))" class="content__info" )
							hgroup
								h3 Mira el teaser 2
		back-to-top(bottom="40px")
			button(type="button")
</template>

<script>

//import { mapGetters } from 'vuex';

//import Countdown from '~/components/Countdown.vue'

export default {
	data() {
		return {
      link: ''
    }
	},
	/*components: {
		Countdown
	},
	computed:{
		...mapGetters({
			getcountdown: 'getCountdown',
			getschedule: 'getSchedule',
			getteaser: 'getTeaser',
			getcancion: 'getCancion'
		}),
	},*/
	methods:{
		linkCalendar(){

			var link = "";

			if(this.$device.isWindows || this.$device.isAndroid){
				link = "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20210725T010000Z%2F20210725T130000Z&details=Por%20lo%20vivido%20y%20por%20lo%20que%20viene.%20Te%20invitamos%20al%20estreno%20de%20la%20canci%C3%B3n%20que%20Claro%20y%20Lucho%20Quequezana%20han%20preparado%20para%20celebrar%20nuestro%20Bicentenario.&text=Celebremos%20el%20bicentenario%20con%20esta%20canci%C3%B3n";
			}else if(this.$device.isMacOS || this.$device.isIos){
				link = "data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20210725T010000Z%0ADTEND:20210725T130000Z%0ASUMMARY:Celebremos%20el%20bicentenario%20con%20esta%20canci%C3%B3n%0ADESCRIPTION:Por%20lo%20vivido%20y%20por%20lo%20que%20viene.%20Te%20invitamos%20al%20estreno%20de%20la%20canci%C3%B3n%20que%20Claro%20y%20Lucho%20Quequezana%20han%20preparado%20para%20celebrar%20nuestro%20Bicentenario.%0AEND:VEVENT%0AEND:VCALENDAR%0A"
			}

			window.open(link, '_blank');

		}
	},
	mounted(){
		//this.$router.replace(this.localePath(this.$t('menu[0].url')));
	},
	methods:{
		openModal(){
      //console.log("video",url);
      $nuxt.$emit('showModal');
    }
	}
}
	
</script>