<!-- eslint-disable vue/multi-word-component-names -->
<!-- Header.vue -->
<template>
  <header>
    <p class="title-style">覺陽股份有限公司</p>
  </header>
  <main>
    <button
      class="btn-style"
      @click="toggleLogout"
    >
      <span class="btn-text">登出</span>
    </button>
  </main>
</template>

<script setup>
import { useLogout } from '@/composables/useAuth'

function toggleLogout() {
  useLogout()
}
</script>

<style scoped>
.title-style {
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.btn-style {
  display: inline-flex;
  padding: 7px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--radius-button, 8px);
  border: 1px solid var(--color-button-border-primary, #e0e0e0);
  background: var(--color-button-bg-primary, #fff);
  color: #000;
}
.btn-text {
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.btn-style:hover {
  transition: 0.3s;
  background-color: #f64646;
  color: #ffffff;
}
</style>
