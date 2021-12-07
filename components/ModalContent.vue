<template lang="pug">
	.layout__modals
		modal(name="mContent" :width="660" :height="'auto'" :adaptive="true")
			.spacer
				.block
					.block__header
						button(@click="$modal.hide('mContent')") X
					.block__main
						.content(v-show="code_show == false")
							.content__image
							.content__info
								form(ref="form1" @submit.prevent="validate('form_code1','form1')" data-vv-scope='form_code1')
									fieldset
										hgroup
											h3 Progreso del exámen
										dl
											dt
												label Ingrese su código
												input(name="codigo" v-model="register.codigo" v-validate="'required'")
											dd
												span.error(v-show="errors.has('form_code1.codigo')") * {{ errors.first('form_code1.codigo') }}
									legend
										button(type='submit' :disabled="errors.any() || !isCompleted1" :class="{ inactive: errors.any() || !isCompleted1 }") {{ textButton }}	
						.result(v-show="code_show == true")
							.result__main(v-if="progress != null")
								hgroup(v-if="result")
									h3 
										| Exámen: 
										span {{ result.field_exam }}
									h5 
										strong Usuario: 
										| {{ result.field_user }} 
								.progress
									.progress__step(:class="[progress == 'Paso 1'? 'active' : '']")
										h4 Muestras recibidas
									.progress__arrow
									.progress__step(:class="[progress == 'Paso 2'? 'active' : '']")
										h4 En proceso
									.progress__arrow
									.progress__step(:class="[progress == 'Paso 3'? 'active' : '']")
										h4 Pendiente de pago
									.progress__arrow
									.progress__step(:class="[progress == 'Paso 4'? 'active' : '']")
										h4 Resultados disponibles
							.result__main(v-if="progress == null")
								hgroup
									h3 Código incorrecto

</template>

<script>

export default {
	name: 'modal-content',
	data() {
		return {
			register:{
				codigo: null
			},
			code_show: false,
			progress: null,
			textButton: "Enviar",
      sendButton: true,
      result: null
		}
	},
	computed: {
    isCompleted1: function () {
      return this.sendButton && this.register.codigo;
    }
  },
	mounted () {
		this.$nuxt.$on('showModal',() => {

			this.code_show = false;
			this.progress = null;
			this.result = null;

			this.register.codigo = '';
			this.sendButton = true;
			this.textButton = "Enviar";

			this.$modal.show('mContent');

	 })
	},
	beforeDestroy(){
		this.$nuxt.$off('showModal')
	},
	methods:{
		validate(scope, form) {
			const self = this;

			self.$validator.validateAll(scope).then(function(result) {
				if (result) {

					console.log("entramos");
					
					self.sendButton = false;
					self.textButton = "Procesando";

					self.$prismic.api.query(
					  [
		          self.$prismic.predicates.at('document.type', 'examenes'),
		          self.$prismic.predicates.fulltext('my.examenes.field_code', self.register.codigo)
		        ],
		        { orderings : '[my.examenes.field_user]' },
		        function( error, content ){

		        	if(error){
		        		console.log("error",error);
		        	}else{

		        		self.register.codigo = '';
								self.sendButton = true;
								self.textButton = "Enviar";

		        		if(content.results.length > 0){
		        			self.result = content.results[0].data;
		        			self.progress = content.results[0].data.field_state;
		        		}else{
		        			self.progress = null;
		        		}

		        		self.code_show = true;

		        		console.log("content", content);

		        	}

		        }

					)

					return;
				}

			}).catch(function(error){

				//console.log("ERROR RESULT",error);
				//APP.CORE.Util.notificacion(0, "tc", "Error:", '• ' + error, 4000);
			});
		}
	}
}

</script>