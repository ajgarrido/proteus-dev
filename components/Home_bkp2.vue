<template lang="pug">
	.layout__main
		.page1
			//-home-header(:banner="home.group_gallery")
			.page1__main
				//section.section1
					.section1__align
						.section1__main
							.content
								.content__list
									a.content__item(v-for="item in categorias.results")
										blockquote
											figure
												div(:style="{ backgroundImage: 'url(' + item.data.field_image.url + ')' }")
											figcaption
												h4 
													b Juegos 
													| {{ $prismic.asText(item.data.field_title) }}
				
				section.section2
					.section2__align
						.section2__header
							select(v-model="$i18n.locale")
								option(v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code") {{ lang.name }}
						.section2__main
							hgroup
								h2 Escoge el juego que más te guste
								p Tenemos una gran variedad para todas la edades en las siguientes categorías:
							.content
								.content__options
									mq-layout(:mq="['movil', 'tablet']")
										.select
											select(@change="filterIsotope($event.target.value)")
												//option Todos
												option(v-for="item in categorias.results" ) {{ $prismic.asText(item.data.field_title) }}

									mq-layout(mq="tablet-h+")
										//a(@click="filter('all')" :class="[filterCategory==='' ? 'active' : '']") Todos
										a(v-for="item in categorias.results" :class="[filterCategory===$prismic.asText(item.data.field_title).toLowerCase()  ? 'active' : '']" @click="filterIsotope($prismic.asText(item.data.field_title))") {{ $prismic.asText(item.data.field_title) }}

								isotope(ref="cpt" id="root_isotope" class="content__list" :options='getOptions()' v-images-loaded:on.progress="layout" :list="resaltados" @filter="filterOption='arguments[0]'" @sort="sortOption=arguments[0]")
									.content__item(v-for="item in resaltados" :key="item.id")
										nuxt-link(tag="a" :to="`/catalogo/${item.uid}`")
											blockquote
												.offer(v-if="item.data.field_offer")
													.offer__tie OFERTA
												.expansion(v-if="item.data.field_expansion")
													h5 Exp
												figure(v-lazy-container="{ selector: 'img' }")
													img(:data-src="item.data.field_image.url" alt="Not found")
													.link
												figcaption
													div
														h3 {{ $prismic.asText(item.data.field_title) }}
													h4(:class="[item.data.field_offer? 'discount' : '']")
														| S/. {{ $prismic.asText(item.data.field_price) }}
														span(v-if="item.data.field_offer") S/. {{ $prismic.asText(item.data.field_price) | discount($prismic.asText(item.data.field_discount)) }}	

				section.section5
					.section5__align
						.section5__main
							.content
								.content__info
									.image(:style="{ backgroundImage: 'url(' + home.field_image_banner.url + ')' }")
									h2 
										| {{ $prismic.asText(home.field_text1_banner) }}
										span {{ $prismic.asText(home.field_text2_banner) }}

				section.section4
					.section4__align
						.section4__main
							hgroup
								h2 Novedades
								//p There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
							.content
								swiper(ref="mySwiper3" :options="swiper.mode2" class="content__list")
									swiper-slide(v-for="(item, index) in novedades" :key="index" class="content__item")
										nuxt-link(tag="a" :to="`/catalogo/${item.uid}`")
											blockquote
												.offer(v-if="item.data.field_offer")
													.offer__tie OFERTA
												.expansion(v-if="item.data.field_expansion")
													h5 Exp
												figure(v-lazy-container="{ selector: 'img' }")
													img(:data-src="item.data.field_image.url" alt="Not found")
													.link
												figcaption
													div
														h3 {{ $prismic.asText(item.data.field_title) }}
													h4(:class="[item.data.field_offer? 'discount' : '']")
														| S/. {{ $prismic.asText(item.data.field_price) }}
														span(v-if="item.data.field_offer") S/. {{ $prismic.asText(item.data.field_price) | discount($prismic.asText(item.data.field_discount)) }}
								.swiper-button-prev(slot="button-prev")
								.swiper-button-next(slot="button-next")

				

								
</template>


<style scoped>
	img[lazy='loading'] {
		filter: blur(15px);
	}
</style>


<script>

//import axios from '~/plugins/axios';
import HomeHeader from '~/components/HomeHeader.vue';
import prismicDOM from 'prismic-dom';
//import VeeValidate, { ValidationObserver, ValidationProvider, localize, Validator  } from 'vee-validate';

/*Validator.extend('string', {
	getMessage: function(field){ return 'No es un formato valido' },
	validate: function(value){
		return new Promise( function(resolve, reject){

			//var reg = /^[a-z][a-z\s]*$/i;
			var reg = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

			if(reg.test(value)) {
				resolve({ valid: true })
			} else {
				resolve({ valid: false })
			}

		})
	}
});*/

/*

Validator.localize({
	en: {
		messages: {
			required: 'Este campo es requerido',
			//digits: (field, length) => `Este campo ${field} no debe tener más de ${length} caracteres*`,
			//email: (field) => `El campo ${field} debe ser un correo electrónico válido*`
			digits: (field, length) => `Ingrese ${length} caracteres numéricos`,
			email: (field) => `Ingrese un correo electrónico válido`
			//numeric: 'Este campo solo puede contener caracteres numéricos',
			//length: 'Este campo {length} contener caracteres numéricos',
			//max: (_, { length }) => `this field must have no more than ${length} characters`
		}
	}
});
*/

//import { mapState } from 'vuex';
//import { mapGetters } from 'vuex';

export default {
	props: ['resaltados','novedades','categorias','home'],
	layout: 'main',
	name: 'home',
	
	//middleware: 'auth',
	components: {
		HomeHeader
		//ValidationObserver,
		//ValidationProvider
	},
	directives: {
		imagesLoaded: window.VueImagesLoaded
	},
	/*async asyncData({ $prismic, error }) {
		console.log('asyncData',$prismic);
		try{
			// Query to get the home page content
			const home = (await $prismic.api.getSingle('home')).data;

			console.log('home',home);

			return {
				// Page content
				//banner: homepage.homepage_banner[0],
				// Set slices as variable
				//slices: homepage.page_content
			}
		} catch (e) {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},*/
	data() {
		return {
			access_token: "7527594256.b54197d.0131b42097b24438aac96a08dd19b8bc",
			grams: [],
			selected: null,
			sortOption:null,
			filterOption:"",
			filterText: "",
			filterCategory: "",
			swiper:{
				mode1:{
					slidesPerView: 1,
					//freeMode: true,
					spaceBetween: 0,
					touchRatio: 0,
					pagination: {
						el: '.section3 .swiper-pagination',
						//dynamicBullets: true,
						clickable: true
					}
					
					/*navigation: {
						nextEl: '.section3 .swiper-button-next',
						prevEl: '.section3 .swiper-button-prev',
						clickable: true
					}*/
				},
				mode2:{
					//freeMode: true,
					//spaceBetween: 40,

					touchRatio: 0,
					//cssMode: true,
					//setWrapperSize: true,
					//watchOverflow: true,
					//centeredSlides: true,
					//slidesPerView: 'auto',
					//slidesPerView: 4,
					//updateOnWindowResize:true,
					/*pagination: {
						el: '.swiper-pagination',
						//dynamicBullets: true,
						clickable: true
					},*/
					//setWrapperSize:true,
					//width: 'auto',
					//height: 'auto',
					//width: 'auto',
					
					navigation: {
						nextEl: '.section4 .swiper-button-next',
						prevEl: '.section4 .swiper-button-prev',
						clickable: true
					},
					breakpoints: {
						1920: {
							spaceBetween: 30,
							slidesPerView: 5
						},
						1440: {
							spaceBetween: 30,
							slidesPerView: 5
						},
						1366: {
							spaceBetween: 30,
							slidesPerView: 4
						},
						1024: {
							spaceBetween: 30,
							slidesPerView: 3
						},
						768: {
							spaceBetween: 30,
							slidesPerView: 2
						},
						425: {
							spaceBetween: 30,
							slidesPerView: 1
						},
						320: {
							spaceBetween: 30,
							slidesPerView: 1
						}
					}
				}
			},
			index: null,
			datos: '',
			dni: '',
			email: '',
			autorizo: ''
		}
	},

	//async middleware({ $prismic, error }) {

	/*async middleware({ store, $prismic }) {

		try{
			// Query to get the home page content
			//const home = (await $prismic.api.getSingle('home')).data;
			//console.log('home',home);

			await store.dispatch('fetchContents', $prismic)

			//this.filter('Familiares');

			//return {
				// Page content
				//banner: homepage.homepage_banner[0],
				// Set slices as variable
				//slices: homepage.page_content
			//}
		} catch (e) {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},*/
	filters: {
		discount(value, x) {
			return value - (parseInt(value * x)/100);
		}
	},
	created() {
		//this.getGrams();
		
	},
	mounted(){
		var self = this;

		this.$nextTick(() => {    
			self.filterIsotope('familiares');
		});

	},
	methods:{
		filterIsotope: function(string) {
			var self = this

			//console.log("filter key", string);

			var key = string.toLowerCase();

			if(key == 'all'){
				self.filterCategory = '';
				self.$refs.cpt.unfilter();
			}else{
				self.filterCategory = key;
				self.$refs.cpt.filter('isCategory');
			}

			/*if (this.filterOption == key)
				key = null;*/
			//this.isotopeFilter(key);
		},
		cleanString(value) {
			return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
		},
		getOptions: function () {
			var self = this;
			return {
				//filter: 'familiares',
				//layoutMode: 'fitRows',
				//itemSelector: '.content__item',
				//itemSelector: 'familiares',
				/*masonry: {
					//columnWidth: '.content__item',
					filter : 'familiares',
					horizontalOrder: true,
					gutter: 0
				},*/
				//filter: 'familiares',
				layoutMode: 'masonry',
				getFilterData:{
					default: function(el) {
						return el.category === "familiares";
					},
					isCategory: function(el){
						//console.log("field_categories",el.data.field_categories.slug.toLowerCase());
						//console.log("filterCategory",self.cleanString(self.filterCategory));

						return self.cleanString(el.data.field_categories.slug)===self.cleanString(self.filterCategory);
					}
				}
			}
		},
		layout: function () {
			console.log("layout isotope");
			
			//this.$refs.cpt.layout('masonry');
			//this.filterIsotope('familiares');
		},
		getGrams() {
			/*this.$axios.$get('https://api.instagram.com/v1/users/self/media/recent?access_token=' +this.access_token + '&count=10')
				.then(({data}) => {
					console.log("data",data);
					this.grams = data;
				})
				.catch(function (error) {
					console.log(error)
				});*/
		},
		/*getMoreGrams(){
			axios.get(this.next_url)
				.then(({data}) => {
					this.grams = this.grams.concat(data.data)
					this.next_url = data.pagination.next_url
				})
				.catch(function (error) {
					console.log(error)
					this.error = true
				});         
		},*/
		showModal() {
			this.$modal.show('m1');
			//this.selectedEquipo = item;
			//console.log("item", item);
		},
		hideModal1() {
			this.$modal.hide('m1');
			//this.terminos = false;
			//this.selectedEquipo = '';
		},
		hideModal2() {
			this.$modal.hide('m2');
			//this.terminos = false;
			//this.selectedEquipo = '';
		},
		isNumber: function(evt) {
			evt = (evt) ? evt : window.event;
			var charCode = (evt.which) ? evt.which : evt.keyCode;
			if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
				evt.preventDefault();;
			} else {
				return true;
			}
		},
		/*async onSubmit() {
			//this.locale = "es";
			const isValid = await this.$refs.observer.validate();
			if (!isValid) {
				return;
			}

			//try {
			//	this.$toast.show('Logging in...', {icon: "fingerprint"});
			//	await this.$auth.loginWith('local', {
			//		data: {
			//			"email": this.email,
			//			"password": this.password
			//		}
			//	}).catch(e => {
			//		this.$toast.error('Failed Logging In', {icon: "error_outline"});
			//	});
			//	if (this.$auth.loggedIn) {
			//		this.$toast.success('Successfully Logged In', {icon: "done"});
			//	}
			//} catch (e) {        
			//		this.$toast.error('Username or Password wrong', {icon: "error"});
			//}

			const { dni, email, autorizo } = this;

			//this.$store.dispatch("LOGIN", { dni, email });

			this.$store.dispatch('actLogin', { dni, email, autorizo }).then((res) => {

				this.$router.push('/catalogo/movil');

				//console.log("resp2", resp);
				//this.$router.push('/')
				//this.$router.push('/catalogo/oferta-movil')
				
				
			}).catch(err => {
				//commit(AUTH_ERROR, err)
				//localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
				this.$modal.show('m2');

				console.log("resp err2", err);
			})

			//this.$store.dispatch("act_login", {
			//	username: this.dni,
			//	password: this.email
			//});

			//this.$router.push('/catalogo/oferta-movil')
			
			//await this.addExpense(this.form);
			//await this.getAllExpenses();
			//console.log("listo enviando");
		},*/
		resetForm () {
			/*this.email = '';
			this.password = '';
			this.confirmation = '';
			this.subject = '';
			this.choices = [];
			this.$nextTick(() => {
				this.$refs.observer.reset();
			});*/
		}
		/*validateBeforeSubmit() {
			//this.$validator.validateAll();
			console.log("listo enviando");
		}*/
	}
};


</script>