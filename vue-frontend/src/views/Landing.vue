// two buttons and a slider
<template>
	<div>
	<div max-width="500px">
<Slider></Slider>
    </div>
		<div>
			<a href="signup">Sign Up</a>
			<a href="signin">Sign In</a>
		</div>
	</div>
</template>

<script>
import Slider from '../components/Slider'
export default {
	components: {
		Slider
	}
};
</script>

<style></style>
