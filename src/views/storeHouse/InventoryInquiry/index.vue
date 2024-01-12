<template>
	<div class="card f_center f_column">
		<div class="card_header">
			<el-form
				:inline="true"
				:model="form">
				<el-form-item label="查询字段1">
					<el-input
						v-model="form.name"
						placeholder="请输入xxxx" />
				</el-form-item>
				<el-form-item label="查询字段2">
					<el-select
						v-model="form.region"
						placeholder="请选择123123">
						<el-option
							label="Zone one"
							value="shanghai" />
						<el-option
							label="Zone two"
							value="beijing" />
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button
						type="primary"
						@click="onSubmit">
						搜索
					</el-button>
					<el-button type="success">导出</el-button>
					<el-button
						type="success"
						@click="handleOpenDialog">
						导入
					</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="card_body">
			<div class="table_wrap">
				<el-table
					:data="tableData"
					height="100%"
					max-height="100%"
					style="width: 100%">
					<el-table-column
						center
						prop="itemID"
						label="编号" />
					<el-table-column
						center
						prop="ID"
						label="序号" />
					<el-table-column
						center
						prop="outTime"
						label="出库日期" />
					<el-table-column
						center
						prop="MaterialName"
						label="材料名称" />
					<el-table-column
						center
						prop="Material"
						label="材质" />
					<el-table-column
						center
						prop="specificationType"
						label="规格型号" />
					<el-table-column
						center
						prop="unit"
						label="单位" />
					<el-table-column
						center
						prop="storeSurPlusNum"
						label="库存余量" />
					<el-table-column
						center
						prop="storePosition"
						label="库存位置" />
					<el-table-column
						center
						prop="remark"
						label="备注" />
				</el-table>
			</div>
		</div>
		<div class="card_footer">分页</div>
		<el-dialog
			title="请导入文件"
			v-model="isShowImport"
			:before-close="handleClose"
			:close-on-click-modal="false"
			:show-close="true">
			<UploadExcel />
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="handleClose">取消</el-button>
					<el-button
						type="primary"
						@click="handleSubmit">
						确定
					</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts">
	const form = reactive({
		name: '',
		region: '',
	})
	const onSubmit = () => {
		console.log('submit!')
	}

	const tableData = ref<TableData[]>([])
	const isShowImport = ref(false)
	const handleOpenDialog = () => {
		isShowImport.value = true
	}
	const handleClose = () => {
		isShowImport.value = false
	}
	// 获取到excel数据,点击确定生成json文件
	const handleSubmit = () => {}
	onMounted(() => {
		for (let i = 0; i < 100; i++) {
			const data = {
				itemID: 'itemID',
				ID: 'ID',
				outTime: 'outTime',
				MaterialName: 'MaterialName',
				Material: 'Material',
				specificationType: 'specificationType',
				unit: 'unit',
				storeSurPlusNum: 'storeSurPlusNum',
				storePosition: 'storePosition',
				remark: 'remark',
			}
			tableData.value.push(data)
		}
	})
</script>

<style scoped lang="less">
	.card_header {
		width: 100%;
	}
	.card_body {
		flex: 1;
		width: 100%;
		overflow: hidden;
		.table_wrap {
			width: 100%;
			height: 100%;
			position: relative;
		}
	}
	.card_footer {
		width: 100%;
		padding: 10px 0;
	}
</style>
