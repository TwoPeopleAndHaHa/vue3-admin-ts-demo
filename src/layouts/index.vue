<template>
	<el-container class="layout_container">
		<el-aside>
			<!-- <div class="aside_box" :style="{ width: isCollapse ? '65px' : '210px' }"> -->
			<div
				class="aside_box"
				:style="{ width: '210px' }">
				<div class="logo f_center">
					<img
						class="logo_img"
						src="@/assets/images/logo.svg"
						alt="logo" />
					<span
						v-show="!isCollapse"
						class="logo_text">
						{{ title }}
					</span>
				</div>
				<el-scrollbar>
					<!-- :collapse="isCollapse" -->
					<el-menu
						:router="false"
						:default-active="activeMenu"
						:unique-opened="accordion"
						:collapse-transition="false">
						<SubMenu :menu-list="menuList" />
					</el-menu>
				</el-scrollbar>
			</div>
		</el-aside>
		<el-container>
			<el-header>Header</el-header>
			<Main />
		</el-container>
	</el-container>
</template>

<script setup lang="ts" name="layoutVertical">
	import { computed } from 'vue'
	import { useRoute } from 'vue-router'
	import { useAuthStore } from '@/stores/modules/auth'
	import { useGlobalStore } from '@/stores/modules/global'
	import Main from '@/layouts/components/Main/index.vue'
	// import ToolBarLeft from '@/layouts/components/Header/ToolBarLeft.vue'
	// import ToolBarRight from '@/layouts/components/Header/ToolBarRight.vue'
	import SubMenu from '@/layouts/components/Menu/SubMenu.vue'

	const title = ref(import.meta.env.VITE_GLOBAL_TITLE)

	const route = useRoute()
	const authStore = useAuthStore()
	const globalStore = useGlobalStore()
	const accordion = computed(() => globalStore.accordion)
	const isCollapse = computed(() => globalStore.isCollapse)
	const menuList = computed(() => authStore.showMenuListGet)
	const activeMenu = computed(
		() =>
			(route.meta.activeMenu ? route.meta.activeMenu : route.path) as string,
	)
</script>

<style lang="less" scoped>
	.el-container {
		width: 100%;
		height: 100%;
		:deep(.el-aside) {
			width: auto;
			background-color: var(--el-menu-bg-color);
			border-right: 1px solid var(--el-aside-border-color);
			.aside_box {
				display: flex;
				flex-direction: column;
				height: 100%;
				transition: width 0.3s ease;
				.el-scrollbar {
					height: calc(100% - 55px);
					.el-menu {
						width: 100%;
						overflow-x: hidden;
						border-right: none;
					}
				}
				.logo {
					box-sizing: border-box;
					height: 55px;
					.logo_img {
						width: 28px;
						object-fit: contain;
						margin-right: 6px;
					}
					.logo_text {
						font-size: 21.5px;
						font-weight: bold;
						color: var(--el-aside-logo-text-color);
						white-space: nowrap;
					}
				}
			}
		}
	}
</style>
