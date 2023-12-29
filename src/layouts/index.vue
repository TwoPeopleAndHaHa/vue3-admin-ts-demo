<template>
	<el-container class="layout_container">
		<el-aside>
			<!-- <el-scrollbar>
				<el-menu
					:router="false"
					:default-active="activeMenu"
					:collapse="isCollapse"
					:unique-opened="accordion"
					:collapse-transition="false">
					<SubMenu :menu-list="menuList" />
				</el-menu>
			</el-scrollbar> -->
		</el-aside>
		<el-container>
			<el-header>Header</el-header>
			<el-main>Main</el-main>
		</el-container>
	</el-container>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
	.layout_container {
		height: 100%;
		width: 100%;
	}
</style>
