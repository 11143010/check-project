<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <header>
    <div class="header-style">
      <h1>打卡系統登入</h1>
    </div>
  </header>
  <main>
    <form
      class="form-style"
      @submit.prevent="submit"
    >
      <p>使用者帳號</p>
      <input
        type="text"
        placeholder="請輸入帳號"
        v-model="inputName"
      />
      <p>密碼</p>
      <input
        type="password"
        placeholder="請輸入密碼"
        v-model="inputPwd"
      />
      <button
        class="btn-style"
        type="submit"
      >
        登入
      </button>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'
const inputName = ref('aaa')
const inputPwd = ref('123')
const emit = defineEmits(['user'])
function submit() {
  emit('user', inputName.value, inputPwd.value)
}
</script>

<style scoped>
.header-style h1 {
  margin-top: 0;
  margin-bottom: 25px;
  font-size: 24px;
  font-weight: 600;
}

.form-style {
  margin-bottom: 20px;
  text-align: left;
}
.form-style p {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
}
.form-style input {
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid#ccc;
  border-radius: 8px;
  box-sizing: border-box; /* 確保 padding 不會影響寬度 */
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

/* 輸入框被選中時的樣式 */
.form-style input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
}

.btn-style {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;
}

.btn-style:hover {
  background-color: #0056b3;
  transform: translateY(-2px); /* 輕微上浮效果 */
}

.btn-style:active {
  transform: translateY(0);
}
</style>
