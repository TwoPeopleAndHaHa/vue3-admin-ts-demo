import vue from '@vitejs/plugin-vue'
import { PluginOption } from 'vite'
import path from 'path'
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
	const pathSrc = path.resolve(__dirname, '../src')
	return [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
			imports: ['vue', 'vue-router', 'pinia'],
			dts: path.resolve(pathSrc, 'types', 'auto-imports.d.ts'),
			eslintrc: {
				enabled: false,
			},
		}),
		Components({
			resolvers: [ElementPlusResolver()],
			dts: path.resolve(pathSrc, 'types', 'components.d.ts'),
		}),
	]
}
