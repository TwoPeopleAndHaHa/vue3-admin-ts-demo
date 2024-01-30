<template>
	<div class="card">
		<CycleTime @child-click="getCycleTime" />
	</div>
</template>

<script setup lang="ts">
	import CycleTime from './components/cycleTime.vue'
	const getCycleTime = (timeStamp: string) => {
		console.log(' timeStamp ::>', timeStamp)
	}
</script>

<style scoped></style>
