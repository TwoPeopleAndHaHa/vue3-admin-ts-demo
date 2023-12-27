<template>
	<div class="form_wrap f_center f_column">
		<div class="title_wrap">用户名登录</div>
		<div class="login_form_wrap">
			<el-form
				ref="loginFormRef"
				:model="loginForm"
				:rules="rules"
				:label-position="'left'"
				:hide-required-asterisk="true"
				status-icon>
				<el-form-item
					label="密码:"
					prop="password">
					<el-input
						v-model.trim="loginForm.password"
						type="password" />
				</el-form-item>
				<el-form-item>
					<el-checkbox
						v-model="loginForm.rememberPass"
						label="记住密码" />
				</el-form-item>
				<el-form-item>
					<el-button
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
	import { ElMessage } from 'element-plus'
	const router = useRouter()
	const loginFormRef = ref()
	const loginForm = ref({
		password: 'admin123',
		rememberPass: '',
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
		await formEl.validate((valid: boolean) => {
			if (valid) {
				router.replace('/home')
				ElMessage.success('登录成功')
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
	.login_form_wrap {
		width: 100%;
	}
	.login_btn {
		width: 50%;
		margin: 0 auto;
	}
</style>
@/types/global
