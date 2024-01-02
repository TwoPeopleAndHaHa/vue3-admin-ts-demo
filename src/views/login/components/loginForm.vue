<template>
	<div class="form_wrap f_center f_column">
		<div class="title_wrap">用户名登录</div>
		<div class="login_form_wrap">
			<el-form
				ref="loginFormRef"
				:model="loginForm"
				:rules="rules"
				:label-position="'top'"
				:hide-required-asterisk="true"
				status-icon>
				<el-form-item
					label="用户名:"
					prop="username">
					<el-input v-model.trim="loginForm.username" />
				</el-form-item>
				<el-form-item
					label="密码:"
					prop="password">
					<el-input
						v-model.trim="loginForm.password"
						type="password" />
				</el-form-item>
				<el-form-item>
					<el-checkbox
						v-model="rememberPass"
						label="记住密码" />
				</el-form-item>
				<el-form-item>
					<el-button
						:loading="loading"
						class="login_btn"
						type="primary"
						@click="submitForm(loginFormRef)">
						登录
					</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
	import md5 from 'md5'
	import { HOME_URL } from '@/config'
	import { getTimeState } from '@/utils'
	import { ElMessage } from 'element-plus'
	import { login } from '@/api/login/index'
	import { Login } from '@/api/interface/index'
	import { useUserStore } from '@/stores/modules/user'
	import { useKeepAliveStore } from '@/stores/modules/keepAlive'
	import { initDynamicRouter } from '@/router/modules/dynamicRouter'
	const userStore = useUserStore()
	const keepAliveStore = useKeepAliveStore()
	const router = useRouter()
	const loginFormRef = ref()
	const rememberPass = ref(false)
	const loading = ref(false)
	const loginForm = ref<Login.ReqLoginForm>({
		username: 'admin123',
		password: 'admin123',
	})
	const isCorrectPass = (rule: any, value: any, callback: any): void => {
		if (value !== 'admin123') {
			callback(new Error('密码错误,请重新输入'))
		} else {
			callback()
		}
	}
	const rules = computed(() => {
		return {
			username: [
				{
					required: true,
					message: '请输入用户名',
					trigger: ['blur', 'change'],
				},
			],
			password: [
				{
					required: true,
					message: '请输入密码',
					trigger: ['blur', 'change'],
				},
				{ validator: isCorrectPass, trigger: ['blur', 'change'] },
			],
		}
	})
	const submitForm = async (formEl: FormEl) => {
		if (!formEl) return
		await formEl.validate(async (valid: boolean) => {
			if (valid) {
				try {
					loading.value = true
					const { data } = await login({
						...loginForm.value,
						password: md5(loginForm.value.password),
					})
					userStore.setToken(data.access_token)
					// 调用初始化路由
					await initDynamicRouter()
					// 初始化数据
					// tabsStore.setTabs([])
					keepAliveStore.setKeepAliveName([])
					router.push(HOME_URL)
					ElNotification({
						title: getTimeState(),
						message: '欢迎登录 BaLiang-Admin',
						type: 'success',
						duration: 2000,
					})
					router.replace(HOME_URL)
				} catch (error) {
					ElMessage.error('登录失败,请稍后重试')
				} finally {
					loading.value = false
				}
			} else {
				ElMessage.error('登录失败,请稍后重试')
			}
		})
	}
</script>

<style lang="less" scoped>
	.form_wrap {
		height: 100%;
		width: 100%;
		padding: 0 70px;
	}
	.title_wrap {
		font-size: 28px;
	}
	.login_form_wrap {
		width: 100%;
	}
	.login_btn {
		width: 50%;
		margin: 0 auto;
	}
</style>
