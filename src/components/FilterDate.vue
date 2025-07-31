<template>
  <div class="select">
    <select
      v-model="thisYear"
      class="select-option"
    >
      <option
        v-for="y in yearList"
        :key="y"
        :value="y"
      >
        {{ y }}
      </option>
    </select>
    <select
      v-model="thisMonth"
      class="select-option"
    >
      <option
        v-for="m in monthList"
        :key="m.value"
        :value="m.value"
      >
        {{ m.month }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  yearList: Object,
  monthList: Object,
  year: Number,
  month: Number,
})
const yearList = props.yearList
const monthList = props.monthList
const thisMonth = ref(props.month)
const thisYear = ref(props.year)

const emit = defineEmits(['selectDate'])

watch(
  [thisYear, thisMonth],
  () => {
    const selectYear = thisYear.value
    const selectMonth = thisMonth.value.toString().padStart(2, '0')
    emit('selectDate', [String(selectYear), String(selectMonth)])
  },
  {
    immediate: true,
  },
)
</script>

<style scoped>
.select {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-gap-md, 16px);
  align-self: stretch;
}
.select-option {
  display: flex;
  width: 150px;
  height: 40px;
  padding: 0px var(--spacing-mobile-padding, 16px);
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-input, 6px);
  border: 1px solid var(--color-input-border, #e2e8f0);
  background: #fff;
  color: black;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
