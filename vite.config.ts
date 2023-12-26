import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'path'
import { wrapperEnv } from './build/getEnv'
import { createVitePlugins } from './build/plugins'
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const proCwd = process.cwd()
	const env = loadEnv(mode, proCwd)
	const ViteEnv = wrapperEnv(env)
	return {
		plugins: createVitePlugins(ViteEnv),
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		server: {
			host: '0.0.0.0',
			port: 8484,
			strictPort: true,
			open: true,
			proxy: {
				'/api': {
					target: ViteEnv.VITE_PROXY,
					changeOrigin: true,
					ws: true,
					secure: false,
					rewrite: path => path.replace(/^\/api/, ''),
				},
			},
		},
		css: {
			preprocessorOptions: {
				less: {
					additionalData: `@import "@/styles/var.less";`,
				},
			},
		},
	}
})
