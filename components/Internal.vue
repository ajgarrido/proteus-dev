<template lang="pug">
	.layout__main
		.page2
			.page2__header
				section.section1
					.section1__align
						.section1__header
							.banner
								.banner__mask INTERNAL
								//.banner__image(:style="{ backgroundImage: 'url(' + detail.field_banner.url + ')' }")



</template>

<script>


import prismicDOM from 'prismic-dom';

export default {
	//layout: 'internal',
	//props: ['home'],
	//name: 'internal',
	components: {
		//HomeHeader,
  },
	data() {
		return {
			
		}
	},
	async asyncData({ $prismic, params, error }) {
		console.log("params1",params);
		try {

			console.log("params",params);

			//const alldocus = await $prismic.api.query('')



			

			const detail = await $prismic.api.getByUID('contenidos', params.uid)

			

			console.log("detail",detail);


			//console.log("detail",detail.data);
			

			return {
				detail: detail
			}

		} catch (e) {
			// Returns error page
			error({ statusCode: 404, message: 'Page not found' })
		}
	}
}

</script>