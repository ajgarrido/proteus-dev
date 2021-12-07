<template lang="pug">
	.layout__navmenu
		.align
			.menu
				.menu__list
					mq-layout(mq="tablet-h+")
						ul.main-menu
							li
								nuxt-link(tag="a" :to="`/`") Inicio
							li(v-for="(n1, n1_index) in menu" :key="n1+'-'+n1_index")
								a(v-if="n1.link == undefined")
									| {{ n1.text }}
									span.drop-icon(v-if="n1.submenu.length > 0") 
									label.drop-icon(title='Toggle Drop-down', :for="'n1'+n1_index" v-if="n1.submenu.length > 0") &dtrif;
								nuxt-link(tag="a" :to="`/${n1.link}`" v-else)
									| {{ n1.text }}
									span.drop-icon(v-if="n1.submenu.length > 0") 
									label.drop-icon(title='Toggle Drop-down', :for="'n1'+n1_index" v-if="n1.submenu.length > 0") &dtrif;
								input(type='checkbox' :id="'n1'+n1_index" v-if="n1.submenu.length > 0")
								ul.sub-menu(v-if="n1.submenu.length > 0")
									li(v-for="(n2, n2_index) in n1.submenu" :key="n2+'-'+n2_index")
										a(v-if="n2.link == undefined")
											| {{ n2.text }}
											span.drop-icon(v-if="n2.submenu.length > 0") 
											label.drop-icon(title='Toggle Drop-down', :for="'n2'+n2_index" v-if="n2.submenu.length > 0") &dtrif;
										nuxt-link(tag="a" :to="`/${n2.link}`" v-else)
											| {{ n2.text }}
											span.drop-icon(v-if="n2.submenu.length > 0") 
											label.drop-icon(title='Toggle Drop-down', :for="'n2'+n2_index" v-if="n2.submenu.length > 0") &dtrif;
										input(type='checkbox' :id="'n2'+n2_index" v-if="n2.submenu.length > 0")
										ul.sub-menu(v-if="n2.submenu.length > 0")
											li(v-for="(n3, n3_index) in n2.submenu" :key="n3+'-'+n3_index")
												a(v-if="n3.link == undefined")
													| {{ n3.text }}
												nuxt-link(tag="a" :to="`/${n3.link}`" v-else)
													| {{ n3.text }}
					
					mq-layout(:mq="['tablet', 'movil-h', 'movil']")
						label#toggle-menu(for='tm')
							| Navigation 
							span.drop-icon 
						input#tm(type='checkbox')

						ul.main-menu
							li
								a(href="/") 
									| Inicio
							li(v-for="(n1, n1_index) in menu" :key="n1+'-'+n1_index")
								a(:href="n1.link")
									| {{ n1.text }}
									span.drop-icon(v-if="n1.submenu.length > 0") 
									label.drop-icon(title='Toggle Drop-down', :for="'n1'+n1_index" v-if="n1.submenu.length > 0") &dtrif;
								input(type='checkbox' :id="'n1'+n1_index" v-if="n1.submenu.length > 0")
								ul.sub-menu(v-if="n1.submenu.length > 0")
									li(v-for="(n2, n2_index) in n1.submenu" :key="n2+'-'+n2_index")
										a(:href="n2.link")
											| {{ n2.text }}
											span.drop-icon(v-if="n2.submenu.length > 0") 
											label.drop-icon(title='Toggle Drop-down', :for="'n2'+n2_index" v-if="n2.submenu.length > 0") &dtrif;
										input(type='checkbox' :id="'n2'+n2_index" v-if="n2.submenu.length > 0")
										ul.sub-menu(v-if="n2.submenu.length > 0")
											li(v-for="(n3, n3_index) in n2.submenu" :key="n3+'-'+n3_index")
												a(:href="n3.link")
													| {{ n3.text }}
</template>

<script>

export default {
  name: 'nav-menu',
	data(){
		return{
			menu: []	
		}
  },
	async fetch() {

    var data  = (await this.$prismic.api.getSingle('demo1')).data.body
    var menu = []

    console.log("menu all",data);

    data.forEach(function(item) {
      

      if(item.slice_type == "1st_level"){
      	//console.log("- " + item.primary.link_text)
      	menu.push({ 
          text: item.primary.link_text,
          link: item.primary.nav_link.uid,
          submenu: []
        });
      }

      if(item.slice_type == "2nd_level"){
      	//console.log("-- " + item.primary.link_text)
      	var submenu = []

      	if(item.items.length > 0 && item.items[0].third_level_link_text != null){
          item.items.forEach(function(item_sub) {

          	submenu.push({
          		text: item_sub.third_level_link_text,
          		link: item_sub.third_level_link.uid
          	})

            //console.log("--- " + item_sub.third_level_link_text)
          })
        }

      	menu[menu.length - 1].submenu.push({
      		text: item.primary.link_text,
          link: item.primary.nav_link.uid,
          submenu: submenu
      	})
      	
      }

    });

    this.menu = menu
  }

}

</script>