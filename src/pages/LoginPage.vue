<template>
  <LoginPageLayout>
    <template #main>
      <Login @user="submit" />
    </template>
  </LoginPageLayout>
</template>

<script setup>
import LoginPageLayout from '@/layouts/LoginPageLayout.vue'
import Login from '@/components/Login.vue'
import { useLogin } from '@/composables/useAuth'
import { useDateTime } from '@/composables/useDateTime'
import { onMounted, ref } from 'vue'

const userName = ref()
const userPwd = ref()
function submit(inputName, inputPwd) {
  userName.value = inputName
  userPwd.value = inputPwd
  useLogin(userName, userPwd)
}
onMounted(() => {
  useDateTime()
})
</script>
