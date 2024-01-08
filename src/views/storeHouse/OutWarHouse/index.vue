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
						prop="time"
						label="操作日期" />
					<el-table-column
						prop="storeType"
						label="仓库类型" />
					<el-table-column
						prop="storeName"
						label="所属仓库" />
					<el-table-column
						prop="commodityId"
						label="货物编码" />
					<el-table-column
						prop="commodityName"
						label="货物名称" />
					<el-table-column
						prop="type"
						label="货物状态还是其他状态" />
					<el-table-column
						prop="storeNum"
						label="库存变动" />
					<el-table-column
						prop="brand"
						label="brand" />
					<el-table-column
						prop="unit"
						label="计量单位" />
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
		time: string
		storeType: string
		storeName: string
		commodityId: string
		commodityName: string
		type: string
		storeNum: string
		brand: string
		unit: string
	}[] = reactive([])
	onMounted(() => {
		for (let i = 0; i < 100; i++) {
			const data = {
				time: '2023/1/1',
				storeType: 'xx类型',
				storeName: '仓库1',
				commodityId: 'abcdefg',
				commodityName: '钢筋/混泥土/砖块儿',
				type: '状态',
				storeNum: '1000',
				brand: '品牌',
				unit: '吨',
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
