<template>
	<div class="tabs-box">
		<div class="tabs-menu">
			<el-tabs
				v-model="tabsMenuValue"
				type="card"
				@tab-click="tabClick"
				@tab-remove="tabRemove">
				<el-tab-pane
					v-for="item in tabsMenuList"
					:key="item.path"
					:label="item.title"
					:name="item.path"
					:closable="item.close">
					<template #label>
						<el-icon
							v-if="item.icon && tabsIcon"
							class="tabs-icon">
							<component :is="item.icon"></component>
						</el-icon>
						{{ item.title }}
					</template>
				</el-tab-pane>
			</el-tabs>
			<MoreButton />
		</div>
	</div>
</template>

<script setup lang="ts">
	import MoreButton from './components/MoreButton.vue'
	import { useTabsStore } from '@/stores/modules/tab'
	const tabStore = useTabsStore()
	import { useGlobalStore } from '@/stores/modules/global'
	const globalStore = useGlobalStore()
	import { TabsPaneContext, TabPaneName } from 'element-plus'
	import { useAuthStore } from '@/stores/modules/auth'
	const authStore = useAuthStore()

	const route = useRoute()
	const router = useRouter()

	const tabsMenuValue = ref(route.fullPath)
	const tabsMenuList = computed(() => tabStore.tabsMenuList)
	const tabsIcon = computed(() => globalStore.tabsIcon)
	watch(
		() => route.fullPath,
		() => {
			console.log(' route ::>', route)
			if (route.meta.isFull) return
			tabsMenuValue.value = route.fullPath
			const tabsParams = {
				icon: route.meta.icon as string,
				title: route.meta.title as string,
				path: route.fullPath,
				name: route.name as string,
				close: !route.meta.isAffix,
				isKeepAlive: route.meta.isKeepAlive as boolean,
			}
			tabStore.addTabs(tabsParams)
		},
		{ immediate: true },
	)
	// 初始化需要固定的 tabs
	const initTabs = () => {
		console.log(' authStore.flatMenuListGet ::>', authStore.flatMenuListGet)
		authStore.flatMenuListGet.forEach(item => {
			if (item.meta.isAffix && !item.meta.isHide && !item.meta.isFull) {
				const tabsParams = {
					icon: item.meta.icon,
					title: item.meta.title,
					path: item.path,
					name: item.name,
					close: !item.meta.isAffix,
					isKeepAlive: item.meta.isKeepAlive,
				}
				tabStore.addTabs(tabsParams)
			}
		})
	}
	// Tab Click
	const tabClick = (tabItem: TabsPaneContext) => {
		const fullPath = tabItem.props.name as string
		router.push(fullPath)
	}
	// Remove Tab
	const tabRemove = (fullPath: TabPaneName) => {
		tabStore.removeTabs(fullPath as string, fullPath == route.fullPath)
	}
	onMounted(() => {
		initTabs()
	})
</script>
<style lang="less" scoped>
	@import './index.less';
</style>
