<template>
  <ul class="ul-style">
    <div class="li-style">
      <li
        v-for="title in titleList"
        :key="title"
        class="li-style"
      >
        <div class="default-text">
          <p>{{ title }}</p>
        </div>
      </li>
    </div>

    <li
      v-for="check in filteredList"
      :key="check"
      class="li-style"
    >
      <div class="text">
        <p class="font">{{ formatDate(check.checkDate) }}</p>
      </div>
      <div class="text">
        <p class="font">{{ formatTime(check.checkDate) }}</p>
      </div>
      <div class="text">
        <p class="font">{{ check.checkOutTime ? formatTime(check.checkOutTime) : null }}</p>
      </div>
      <div class="text">
        <select
          class="font"
          v-model="check.restTime"
          @change="updateTotalTime(check)"
        >
          <option
            v-for="key in restOption"
            :key="key"
            :value="key"
          >
            {{ key + 'h' }}
          </option>
        </select>
      </div>
      <div class="text">
        <p class="font">{{ check.totalTime ? formatMsToH(check.totalTime) : null }}</p>
      </div>
      <div class="text">
        <input
          v-model="check.remark"
          class="input-style"
        />
      </div>
    </li>
  </ul>
</template>

<script setup>
import { formatDate, formatTime, formatMsToH } from '@/composables/useDateTime'
import { updateTotalTime } from '@/composables/useAttendance'
import { computed, ref } from 'vue'

const restOption = ref([0.5, 1, 1.5])
const titleList = {
  checkDate: '日期',
  checkTime: '簽到時間',
  checkOutTime: '簽退時間',
  restTime: '中午休息時數',
  totalTime: '總時數',
  remark: '備註',
}

const props = defineProps({
  checkList: Object,
  month: String,
  year: String,
})

//篩選展示陣列
const filteredList = computed(() => {
  return props.checkList.filter((item) => {
    const [y, m] = formatDate(item.checkDate).split('/')
    return y === props.year && m === props.month
  })
})
</script>

<style scoped>
.ul-style {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-gap-sm, 8px);
  flex: 1 0 0;
  align-self: stretch;
}
.li-style {
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.default-text {
  display: flex;
  width: 85px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: var(--radius-card, 12px);
  background: var(--color-bg-text, #e2fff1);
}
.default-text p {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
}
.text {
  display: flex;
  width: 85px;
  padding: 13px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: var(--radius-card, 12px);
  border: 1px solid var(--color-bg-border, #dcdcdc);
}
.text p {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.font {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.input-style {
  width: 70px;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
