// grid to show items
<template>
	<div>
		<div>
			<v-card v-for="(item, index) in items" :key="index">
				<v-card>
					<v-card-title>{{item.title}}</v-card-title>
                    <v-card-text>{{item.text}}</v-card-text>
				</v-card>
			</v-card>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					title: 'title1',
					text: 'text1'
				},
				{
					title: 'title2',
					text: 'text2'
				},	{
					title: 'title3',
					text: 'text3'
				},	{
					title: 'title4',
					text: 'text4'
				},
				{}
			]
		};
	}
};
</script>

<style></style>
