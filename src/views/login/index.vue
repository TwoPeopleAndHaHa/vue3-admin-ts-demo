<template>
	<div class="login_wrap f_center">
		<div class="login_bg"></div>
		<div class="login_form_wrap">
			<LoginForm />
		</div>
	</div>
</template>

<script setup lang="ts">
	import LoginForm from './components/loginForm.vue'
</script>

<style lang="less" scoped>
	.login_wrap {
		height: 100%;
		width: 100%;
		position: relative;
	}
	.login_bg {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
		background: url('@/assets/images/bg.png') no-repeat center center;
		background-size: cover;
	}
	.login_form_wrap {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 600px;
		backdrop-filter: blur(10px) saturate(200%);
		-webkit-backdrop-filter: blur(5px) saturate(200%);
		background-color: rgba(255, 255, 255, 0.6);
	}
</style>
