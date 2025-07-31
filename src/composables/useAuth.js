import router from '@/router'
import { ref } from 'vue'
const isLogin = ref(false)
const userId = ref()

const user = [
  { userId: 0, userName: 'aaa', userPassword: '123' },
  { userId: 1, userName: 'ccc', userPassword: '123' },
]

export function useLogin(nameInput, pwdInput) {
  const result = user.find(
    (u) => u.userName === nameInput.value && u.userPassword === pwdInput.value,
  )
  if (result) {
    userId.value = result.userId
    isLogin.value = true
    router.push({ name: 'checkPage' })
  } else {
    alert('查無此帳號')
  }
  return isLogin
}
export function useLogout() {
  isLogin.value = false
  router.push({ name: 'login' })
}
export function useStatus() {
  return { isLogin, userId }
}
