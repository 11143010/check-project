<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="timer-style">{{ time }}</div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  time: String,
})
</script>

<style scoped>
.timer-style {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: var(--font-size-heading, 24px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
