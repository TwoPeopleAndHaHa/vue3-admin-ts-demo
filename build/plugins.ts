import vue from '@vitejs/plugin-vue'
import { PluginOption } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
/**
 * 创建 vite 插件
 * @param viteEnv
 */
export const createVitePlugins = (
	viteEnv: ViteEnv,
): (PluginOption | PluginOption[])[] => {
	return [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
			imports: ['vue', 'vue-router', 'pinia'],
			dts: './auto-imports.d.ts',
			eslintrc: {
				enabled: false,
			},
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	]
}
