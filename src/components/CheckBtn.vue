<template>
  <button
    class="button"
    @click="toggleCheck"
    :style="button.color"
    :disabled="button.btnStatus"
  >
    <span class="btn-text">{{ button.btnText }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  isCheck: Boolean,
  todayCheck: Boolean,
})

//根據傳進來的值決定按鈕文字及背景樣式
const button = computed(() => {
  if (!props.isCheck && !props.todayCheck) {
    return { btnText: '打卡', color: { backgroundColor: '#CDFFCF' } }
  } else if (!props.todayCheck) {
    return { btnText: '簽退', color: { backgroundColor: '#FFC2C2' } }
  } else {
    return {
      btnText: '今日已完成簽到退',
      color: { backgroundColor: '#E0E0E0' },
      btnStatus: 'true',
    }
  }
})

//發送更改狀態請求
const emit = defineEmits(['toggleCheck'])
function toggleCheck() {
  emit('toggleCheck')
}
</script>

<style scoped>
.button {
  display: flex;
  width: 200px;
  height: 48px;
  padding: 7px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--radius-button, 8px);
  border: 1px solid var(--color-button-border-primary, #e0e0e0);
  background: #cdffcf;
}
.btn-text {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
