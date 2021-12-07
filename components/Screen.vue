<template lang="pug">
	.layout__screen
		.aselect(v-click-outside="closeEvent")
			.selector(@click="toggle()")
				.label(:class="$i18n.locale")
					span {{ value }}
				.arrow(:class="{ expanded : visible }")
				div(:class="{ hidden : !visible, visible }")
					ul
						li(v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code" :class="lang.code" @click="select(lang,$event)" v-if="$i18n.locale != lang.code") 
							span {{ lang.name }}
		//-.selector
			select(v-model="$i18n.locale" @change="onChange($event)")
				option(v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code") {{ lang.name }}
		.menu
			.menu__list
				nuxt-link(v-for="(item, index) in $t('menu')" :key="index" exact :to="localePath(item.url)" v-html="item.name" v-if="item.local" @click.native="onLink()")
				a(v-else :href="item.url" target="_blank" v-html="item.name") 
		.social__movil
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
  mounted(){
    //this.$store.commit('setScreen', false)
    //console.log("begin")

    var self =  this;

		self.$i18n.locales.filter(function (element, index) {

      console.log("element", element);

      if(element.code == self.$i18n.locale){
				self.value = element.name;
			}

    });

    document.getElementsByTagName("html")[0].style.overflow = "hidden";	

    /*if(this.getscreen){
    	document.getElementsByTagName("html")[0].style.overflow = "hidden";	
    }else{
    	document.getElementsByTagName("html")[0].style.overflow = "auto";
    }*/

    
  },
  destroyed() {
    //this.$store.commit('setScreen', true)
    //console.log("destroyed")
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
				this.$i18n.setLocale(language);
			//}

		},
		onLink(){
			//console.log("yeah click");
			this.$store.commit('setScreen', false);
			document.getElementsByTagName("html")[0].style.overflow = "auto";
		},
		onChange(event) {

	    var language = event.target.value.toLocaleLowerCase();
	   	this.$i18n.setLocaleCookie(language);
	    this.$router.replace(this.switchLocalePath(language));

	  },
		/*shortNombres(texto){
			return texto.substring(0, 200) + "...";
			//const nombres = text.split(/[ ,]+/);
			//return nombres[0] + ' ' + nombres[1];
		},*/
		
	}
}
</script>