<template>
	<div class="cycle_time_wrap">
		<el-button
			type="primary"
			size="small"
			plain
			@click="handleGetTime('hour')">
			近一小时
		</el-button>
		<el-button
			type="primary"
			size="small"
			plain
			@click="handleGetTime('day')">
			近一天
		</el-button>
		<el-button
			type="primary"
			size="small"
			plain
			@click="handleGetTime('week')">
			近七天
		</el-button>
	</div>
</template>

<script setup lang="ts">
	import { parseTime } from '@/utils/formatTime'
	const emit = defineEmits(['child-click'])
	const handleGetTime = (dataTime: string) => {
		let eTime: string | number | null = new Date().getTime()
		let tempTime: number
		if (dataTime === 'hour') {
			tempTime = 60000 * 60
		}
		if (dataTime === 'day') {
			tempTime = 60000 * 60 * 24
		}
		if (dataTime === 'week') {
			tempTime = 60000 * 60 * 24 * 7
		}
		// tempTime! 非空断言
		let sTime: string | number | null = eTime - tempTime!
		sTime = parseTime(sTime)
		eTime = parseTime(eTime)
		emit('child-click', [sTime, eTime])
	}
</script>

<style scoped></style>
