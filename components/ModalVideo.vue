<template lang="pug">
	.layout__modals
		modal(name="mVideo" :width="900" :height="'auto'" :adaptive="true")
			.video
				.video__header
					button(@click="$modal.hide('mVideo')") X
				.video__iframe
					iframe(
						width="560"
						height="315"
						:src="url + '&autoplay=1'"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen)
</template>

<script>

export default {
	name: 'modalvideo',
	data() {
		return {
			url: null
		}
	},
	mounted () {
		this.$nuxt.$on('showVideo', (url) => {
			//console.log("showVideo",url);
			this.url = url;
			this.$modal.show('mVideo');
	 })
	},
	beforeDestroy(){
		this.$nuxt.$off('showVideo')
	}
}

</script>