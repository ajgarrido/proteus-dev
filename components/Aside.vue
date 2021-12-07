<template lang="pug">
	.layout__aside
		.aside__left
			.content
				.content__header
					//-.wave
					//-span |

					//-.aselect(:data-value="value" :data-list="list" v-click-outside="closeEvent")
					.aselect(v-click-outside="closeEvent")
						.selector(@click="toggle()")
							.label(:class="$i18n.locale")
								span {{ value }}
							.arrow(:class="{ expanded : visible }")
							div(:class="{ hidden : !visible, visible }")
								ul
									li(v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code" :class="lang.code" @click="select(lang,$event)" v-if="$i18n.locale != lang.code") 
										span {{ lang.name }}
									//-li(v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code" @click="select(item,$event)") {{ lang.name }}
												

					//-.custom-select-wrapper
						.custom-select
							.custom-select__trigger 
								span Tesla
								.arrow
							.custom-options
								span.custom-option.selected(data-value="tesla") Tesla
								span.custom-option(data-value="volvo") Volvo
								span.custom-option(data-value="mercedes") Mercedes

					//-v-select(:options="options" label="title")
						template(v-slot:option="option")
							span(:class="option.icon") {{ option.title }}

					//-.selector
						select(v-model="$i18n.locale" @change="onChange($event)")
							option(v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code") {{ lang.name }}
				.content__main
					nuxt-link(class="claro200" exact :to="localePath($t('menu[0].url'))")
					.logo
			.menu
				.menu__list
					nuxt-link(v-for="(item, index) in $t('menu')" :key="index" exact :to="localePath(item.url)" v-html="item.name" v-if="item.local" :class="{ highlighted: item.highlighted}")
					a(v-else :href="item.url" target="_blank" v-html="item.name") 
		.aside__right
			.burger
				.icon(v-bind:class="{ active: getscreen }" @click="onScreen()")
					span.line.line-1
					span.line.line-2
					span.line.line-3
			.logo
			.social
				ShareNetwork(
					network="facebook"
					:url="$t('redessociales.facebook.url')"
					:title="$t('redessociales.facebook.title')"
					:description="$t('redessociales.facebook.description')"
					:quote="$t('redessociales.facebook.quote')"
					:hashtags="$t('redessociales.facebook.hashtags')")
				
					span.facebook
				ShareNetwork(
					network="whatsapp"
					:url="$t('redessociales.whatsapp.url')"
					:title="$t('redessociales.whatsapp.title')"
					:description="$t('redessociales.whatsapp.description')"
					:quote="$t('redessociales.whatsapp.quote')"
					:hashtags="$t('redessociales.whatsapp.hashtags')")
				
					span.whatsapp
			

</template>

<script>

import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			value: '',
			visible: false
		}
	},
	computed:{
		...mapGetters({
			getscreen: 'getScreen'
		}),

	},
	created(){

	},
	mounted(){

		var self =  this;

		self.$i18n.locales.filter(function (element, index) {

      console.log("element", element);

      if(element.code == self.$i18n.locale){
				self.value = element.name;
			}

    });

    console.log("element name", self.$i18n.locale.name);


		/*$.each(this.$i18n.locales, function(key, value) {
			if(value.code == this.$i18n.locale){
				this.value = value.name;
			}
			//console.log('value',value);
	  	//list.push(key);
	  });*/
		//console.log('$i18n.locale',this.$i18n.locale);
		/*document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
				this.querySelector('.custom-select').classList.toggle('open');
		})

		for (const option of document.querySelectorAll(".custom-option")) {
				option.addEventListener('click', function() {
						if (!this.classList.contains('selected')) {
								this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
								this.classList.add('selected');
								this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
						}
				})
		}*/
	},
	methods:{
		closeEvent: function () {
      //console.log('close event called')
      if(this.visible == true)
      	this.toggle();
    },
		toggle() {
			this.visible = !this.visible;
		},
		select(option, event) {
			//console.log('entramos');

			//if(option.code != this.$i18n.locale){
				this.value = option.name;

				var language = option.code.toLocaleLowerCase();

				this.$router.replace(this.switchLocalePath(language));

				this.$i18n.setLocaleCookie(language);
				/*this.$i18n.setLocale(language);*/
			//}

		},
		onScreen(){
			this.$store.commit('setScreen', !this.getscreen);

			if(!this.getscreen){
				document.getElementsByTagName("html")[0].style.overflow = "auto";
			}

		},
		onChange(event) {

			var language = event.target.value.toLocaleLowerCase();

			//console.log("languaje",language);

			this.$router.replace(this.switchLocalePath(language));

			this.$i18n.setLocaleCookie(language);
			this.$i18n.setLocale(language);

			//this.$nuxt.$router.replace({ path: '/' + language });
			//window.location.replace("http://stackoverflow.com");

		},
	}
}
</script>