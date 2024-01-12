<template>
	<div class="upload_wrap">
		<el-upload
			action=""
			drag
			accept=".xls,.XLS,.xlsx,.XLSX"
			:before-upload="handleBeforeUpload"
			:http-request="handleUpload">
			<i class="el-icon-upload"></i>
			<div class="el-upload__text">
				将文件拖到此处，或
				<em>点击上传</em>
			</div>
		</el-upload>
	</div>
</template>

<script setup lang="ts">
	import * as XLSX from 'xlsx'
	import type { UploadRequestOptions } from 'element-plus'
	let jsonData = [] // 存放转换后的 JSON 数据
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
				// 映射关系，将 Excel 表头映射到你想要的字段名
				const headerMapping: Record<string, string> = {
					编号: 'itemID',
					序号: 'ID',
					出库日期: 'outTime',
					材料名称: 'MaterialName',
					材质: 'Material',
					规格型号: 'specificationType',
					单位: 'unit',
					库存余量: 'storeSurPlusNum',
					库存位置: 'storePosition',
					备注: 'remark',
				}
				// 获取表头
				const header: any = XLSX.utils.sheet_to_json(sheet, {
					header: 1,
				})[0]
				// 根据映射关系转换为你想要的 JSON 数据
				jsonData = XLSX.utils.sheet_to_json(sheet).map((row: any) => {
					const mappedRow: any = {}
					for (const key in header) {
						if (headerMapping[header[key]]) {
							mappedRow[headerMapping[header[key]]] = row[header[key]]
						}
					}
					return mappedRow
				})
				console.log('  ::>', jsonData)
				// write2json()
				resolve()
			}
			reader.readAsArrayBuffer(file)
		})
	}
	// 阻止默认上传以及解决 ts 报错,只涉及本地转换不需要上传
	const handleUpload = (options: UploadRequestOptions): Promise<void> => {
		return new Promise((resolve, reject) => {
			resolve()
		})
	}
	// 将数据转换json文件
	const write2json = () => {
		const json = JSON.stringify(jsonData)
		const blob = new Blob([json], { type: 'application/json' })
		const url = window.URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = 'data.json'
		a.click()
	}
</script>
<style scoped lang="less"></style>
