<template>
	<agile autoplay="autoplay">
		<img class="slide" v-for="n in 5" :key="n" :class="`slide--${n}`" :src="slides[n].src" />
		<template slot="prevButton">
			<i class="fas fa-chevron-left"></i>
		</template>
		<template slot="nextButton">
			<i class="fas fa-chevron-right"></i>
		</template>
	</agile>
</template>

<script>
import { VueAgile } from 'vue-agile';
export default {
	components: {
		agile: VueAgile
	},
	data() {
		return {
			slides: [
				{
					src:
						'https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9'
				},
				{
					src:
						'https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9'
				},
				{
					src:
						'https://images.unsplash.com/photo-1509549649946-f1b6276d4f35?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ'
				},
				{
					src:
						'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9'
				},
				{
					src:
						'https://images.unsplash.com/photo-1511135232973-c3ee80040060?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9'
				},
				{
					src:
						'https://images.unsplash.com/photo-1511231683436-44735d14c11c?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9'
				}
			]
		};
	}
};
</script>

<style lang="sass">
@import '../assets/styles/carousel.sass'
</style>
