<template>
	<form action="">
		<input type="email" v-model="email" placeholder="Email" /><br />
		<input type="password" v-model="password" placeholder="Password" /><br />
		<input type="button" value="Sign In" @click="handleSignIn" /><br />
		<a href="signup">No account? Sign Up Here.</a>
	</form>
</template>

<script>
// import API from '../services/API'
export default {
	data() {
		return {
			email: '',
			password: ''
		};
	},
	methods: {
		async handleSignIn() {
			const raw = JSON.stringify({
				name: '123',
				password: 'cdfdfd'
			});
			var requestOptions = {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: raw,
				mode: 'no-cors'
			};

			fetch('http://localhost:8000/api/signin1', requestOptions)
				.then(result => {
					console.log(result);
				})
				.catch(error => console.log('error', error));
		}
	}
};
</script>

<style></style>
