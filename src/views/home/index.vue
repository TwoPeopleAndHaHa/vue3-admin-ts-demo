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
		<div>
			<el-upload
				drag
				:before-upload="handleBeforeUpload">
				<i class="el-icon-upload"></i>
				<div class="el-upload__text">
					将文件拖到此处，或
					<em>点击上传</em>
				</div>
			</el-upload>
			<el-table
				:data="jsonData"
				v-if="jsonData.length > 0">
				<!-- 根据你的 Excel 表头配置 el-table-column -->
				<!-- 示例表头 -->
				<el-table-column
					prop="name"
					label="姓名"></el-table-column>
				<el-table-column
					prop="age"
					label="年龄"></el-table-column>
				<!-- 其他表头配置... -->
			</el-table>
		</div>
	</div>
</template>

<script setup lang="ts">
	import * as XLSX from 'xlsx'
	interface Person {
		name: string
		age: number
		// 其他属性...
	}
	const jsonData = ref<Person[]>([]) // 存放转换后的 JSON 数据
	const handleBeforeUpload = (file: any): Promise<void> => {
		const reader = new FileReader()
		return new Promise((resolve, reject) => {
			reader.onload = function (e) {
				const data = new Uint8Array(
					(e.target as FileReader).result as ArrayBuffer,
				)
				const workbook = XLSX.read(data, { type: 'array' })
				const sheetName = workbook.SheetNames[0]
				const sheet = workbook.Sheets[sheetName]
				jsonData.value = XLSX.utils.sheet_to_json(sheet) as Person[]
				console.log(' json ::>', jsonData.value)
				resolve()
			}
			reader.readAsArrayBuffer(file)
		})
	}
</script>

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
