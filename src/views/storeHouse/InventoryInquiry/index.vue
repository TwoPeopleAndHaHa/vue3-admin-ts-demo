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
					<el-button type="success">导入</el-button>
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
						prop="itemID"
						label="编号" />
					<el-table-column
						prop="ID"
						label="序号" />
					<el-table-column
						prop="outTime"
						label="出库日期" />
					<el-table-column
						prop="MaterialName"
						label="材料名称" />
					<el-table-column
						prop="Material"
						label="材质" />
					<el-table-column
						prop="specificationType"
						label="规格型号" />
					<el-table-column
						prop="unit"
						label="单位" />
					<el-table-column
						prop="storeSurPlusNum"
						label="库存余量" />
					<el-table-column
						prop="storePosition"
						label="库存位置" />
					<el-table-column
						prop="remark"
						label="备注" />
				</el-table>
			</div>
		</div>
		<div class="card_footer">3</div>
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
	const tableData: {
		itemID: string
		ID: string
		outTime: string
		MaterialName: string
		Material: string
		specificationType: string
		unit: string
		storeSurPlusNum: string
		storePosition: string
		remark: string
	}[] = reactive([])
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
			tableData.push(data)
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
	}
</style>
