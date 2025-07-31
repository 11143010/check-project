<template>
  <CheckPageLayout>
    <template #header>
      <Header />
    </template>
    <template #main>
      <CheckBody>
        <template #content>
          <Timer :time="timeStr" />
          <CheckBtn
            :isCheck="isCheck"
            :todayCheck="todayCheck"
            @toggleCheck="toggleCheck"
          />
          <FilterDate
            :yearList="allTimer.yearList"
            :monthList="allTimer.monthList"
            :year="allTimer.year.value"
            :month="allTimer.month.value"
            @selectDate="changeSelect"
          />
          <CheckList
            :checkList="checkList"
            :year="filterYear"
            :month="filterMonth"
          />
        </template>
      </CheckBody>
    </template>
  </CheckPageLayout>
</template>

<script setup>
import CheckPageLayout from '@/layouts/CheckPageLayout.vue'
import Header from '@/components/Header.vue'
import CheckBody from '@/components/CheckBody.vue'
import Timer from '@/components/Timer.vue'
import CheckBtn from '@/components/CheckBtn.vue'
import FilterDate from '@/components/FilterDate.vue'
import CheckList from '@/components/CheckList.vue'

import { useDateTime } from '@/composables/useDateTime'
import { useCheckList } from '@/composables/useAttendance'
import { onMounted } from 'vue'

const { changeSelect, filterMonth, filterYear, allTimer, timeStr } = useDateTime()
const { toggleCheck, historyCheck, isCheck, todayCheck, checkList } = useCheckList()

onMounted(() => {
  historyCheck()
})

// watch(() => {
//   console.log('簽到' + isCheck.value)
//   console.log('簽到完成' + todayCheck.value)
// })
</script>
