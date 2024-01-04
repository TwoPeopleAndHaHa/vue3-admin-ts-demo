<template>
	<el-container class="layout_container">
		<el-aside>
			<div
				class="aside_box"
				:style="{ width: isCollapse ? '65px' : '210px' }">
				<div class="logo f_center">
					<img
						class="logo_img"
						src="@/assets/images/logo.svg"
						alt="logo" />
					<span
						v-if="!isCollapse"
						class="logo_text">
						{{ title }}
					</span>
				</div>
				<el-scrollbar>
					<el-menu
						:collapse="isCollapse"
						:router="false"
						:default-active="activeMenu"
						:unique-opened="accordion"
						:collapse-transition="false">
						<SubMenu :menu-list="menuList" />
					</el-menu>
				</el-scrollbar>
				<div class="aside_footer f_center">
					<Collapse />
				</div>
			</div>
		</el-aside>
		<el-container>
			<el-header class="f_center f_space_between">
				<Right />
				<Left />
			</el-header>
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
	import Right from '@/layouts/components/Header/HeaderRight.vue'
	import Left from '@/layouts/components/Header/HeaderLeft.vue'
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
				overflow-x: hidden;
				height: 100%;
				transition: width 0.3s ease;
				.el-scrollbar {
					height: calc(100% - 100px);
					.el-menu {
						width: 100%;
						overflow-x: hidden;
						border-right: none;
					}
				}
				.logo {
					box-sizing: border-box;
					height: 55px;
					border-bottom: solid 1px var(--el-menu-border-color) !important;
					.logo_img {
						width: 28px;
						object-fit: contain;
						// margin-right: 6px;
					}
					.logo_text {
						font-size: 21.5px;
						font-weight: bold;
						color: var(--el-aside-logo-text-color);
						white-space: nowrap;
					}
				}
				.aside_footer {
					height: 45px;
					border-top: solid 1px var(--el-menu-border-color) !important;
				}
			}
		}
	}
</style>
