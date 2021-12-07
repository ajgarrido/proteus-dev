<template lang="pug">
	.layout__header
		.section1
			.section1__align.deg
				.section1__header
					nuxt-link(tag="div" class="logo" to="/")
					
					//-.logo
					.aside
						.aside__header
							.send
								h3 
									| Hacemos envios a todo el Perú
									span Envío gratis a todo Lima por compras 
										strong mayores a 200 soles

							.social
								blockquote
									h3 Síguenos 
									ul
										li: a.facebook(href="https://www.facebook.com/maxplay.pe" target="_blank")
										//li: a.twitter(href="")
										li: a.instagram(href="https://www.instagram.com/maxplay.peru/" target="_blank")
										//li: a.whatsapp(href="https://api.whatsapp.com/send?phone=51966465894&text=" target="_blank")

						.aside__main
							a.call(href="https://api.whatsapp.com/send?phone=51966465894&text=" target="_blank")
								p Wasapea aquí
								h4 966 465 894
							.search
								autocomplete(
									type="search"
									:debounceTime="3" 
									:search="search"	
									placeholder="Buscar" 
									aria-label="Buscar" 
									:get-result-value="getResultValue" 
									@submit="handleSubmit" 
								)
									template(#result="{ result, props }")
										li(v-bind="props" class="autocomplete-result item")
											.item__image
												img(:src="result.data.field_image.url" alt="Not found")
												//h3 {{ $prismic.asText(result.data.field_price) }}
											.item__info
												h3 {{ $prismic.asText(result.data.field_title) }}
												prismic-rich-text(:field="result.data.field_search_summary" class="summary")
											

							//@submit="handleSubmit"
							//input(type="text" placeholder="Buscar")
			//.section1__align
				.section1__main
					.links
						.links__button
						ul
							li
								a Juegos de mesa
							li
								a Rompecabezas
							li
								a Accesorios
							li
								a Ofertas
							li
								a Nosotros
							li
								a Contácto
					//.section2
						.section2__align
							.section2__main
								hgroup
									h3 Mobiles
								nav
									ul
										li: a Home
										li: a Electronic
										li Mobiles


</template>

<script>

//const wikiUrl = 'https://en.wikipedia.org';
//const params = 'action=query&list=search&format=json&origin=*';

//import { mapGetters } from 'vuex';
import prismicDOM from 'prismic-dom';

export default {
	data() {
		return {
			dni: '',
			email: '',
			fullNombre: 'Guest' || ''
		}
	},
	/*created(){
		if (isBrowser) {
			if (localStorage.get('state')) {
				store.commit('state', localStorage.get('state'))
			}
			window.addEventListener('beforeleave', () => {
				 localStorage.set('state', JSON.stringify(store.state.state))
			})
		}
	},*/
	created(){
		//this.fullNombre = this.shortNombres(this.user.nombres);
	},
	/*computed:{
		...mapGetters({
			//user: 'getUser',
		}),
	},*/
	methods:{
		/*shortNombres(texto){
			return texto.substring(0, 200) + "...";
			//const nombres = text.split(/[ ,]+/);
			//return nombres[0] + ' ' + nombres[1];
		},*/
		
		async search(input) {

			var self = this;

			//console.log("input",input);

			const searchresult = await self.$prismic.api.query(
        [
          self.$prismic.predicates.at('document.type', 'productos'),
          //self.$prismic.predicates.fulltext('my.productos.field_title', input)
          //self.$prismic.predicates.fulltext('document', input)
          self.$prismic.predicates.fulltext('my.productos.field_search_words', input)
        ],
        { orderings : '[my.productos.field_title]' }
      )


      /*const searchresult = await self.$prismic.api.query(
        [
          self.$prismic.predicates.at('document.type', 'productos'),
          //self.$prismic.predicates.fulltext('my.productos.field_title', input)
          self.$prismic.predicates.fulltext('document', input)
        ],
        { orderings: '[document.first_publication_date desc]'}
      )*/

      //console.log("searchresult",searchresult);

      if (input.length < 1) { return [] }

      return searchresult.results.filter(item => {
      	//console.log("title",item);
      	//console.log("title",prismicDOM.RichText.asText(item.data.field_title));
      	return prismicDOM.RichText.asText(item.data.field_title);
      	//return prismicDOM.RichText.asText(item.data.field_title).toLowerCase().startsWith(input.toLowerCase())
      })


      /*if (input.length < 1 || searchresult.results.length == 0) {
      	console.log("searchresult vacio", searchresult);
				return []
			}else{

				console.log("searchresult", searchresult);
				return searchresult.results
			}*/

			

			//return searchresult*/

		},

		getResultValue(result) {
			//console.log("getResultValue", result);
			return result.title
		},

		handleSubmit(result) {
			this.$router.push("/catalogo/"+result.uid);
		}
		
	}
}
</script>