<template>
	<div>
		<el-row :gutter="10">
			<el-col
				:xs="12"
				:sm="12"
				:md="6"
				:lg="6"
				:xl="6">
				<div class="card black header" />
			</el-col>
			<el-col
				:xs="12"
				:sm="12"
				:md="6"
				:lg="6"
				:xl="6">
				<div class="card black header" />
			</el-col>
			<el-col
				:xs="12"
				:sm="12"
				:md="6"
				:lg="6"
				:xl="6">
				<div class="card black header" />
			</el-col>
			<el-col
				:xs="12"
				:sm="12"
				:md="6"
				:lg="6"
				:xl="6">
				<div class="card black header" />
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
	.header {
		height: 80px;
	}
	.black {
		background-color: #000;
	}
	.red {
		background-color: red;
	}
	.card {
		border-radius: 4px;
		min-height: 36px;
		margin: 10px 0;
	}
	.el-col {
		border-radius: 4px;
	}
</style>
