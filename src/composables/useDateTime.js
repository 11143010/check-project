import { computed, onMounted, ref } from 'vue'

const newDate = ref(new Date())
const year = computed(() => newDate.value.getFullYear())
const month = computed(() => newDate.value.getMonth() + 1)
const timeStr = computed(() => newDate.value.toLocaleTimeString('zh-tw', { hour12: false }))

export function useDateTime() {
  onMounted(() => {
    setInterval(() => {
      newDate.value = new Date()
    }, 1000)
  })
  const filterMonth = ref()
  const filterYear = ref()
  const yearList = ref([])
  const monthList = []
  for (let y = year.value; y >= 2000; y--) {
    yearList.value.push(y)
  }
  for (let i = 1; i <= 12; i++) {
    let a = i + '月'
    monthList.push({ month: a, value: i })
  }

  const allTimer = { yearList, monthList, year, month }

  //篩選年月
  function changeSelect([selectYear, selectMonth]) {
    filterYear.value = selectYear
    filterMonth.value = selectMonth
  }

  return {
    newDate,
    allTimer,
    filterYear,
    timeStr,
    filterMonth,
    changeSelect,
  }
}

//轉換年
export function formatDate(date) {
  const yyyy = date.getFullYear()
  const mm = date.getMonth() + 1
  const dd = date.getDate()
  return `${yyyy}/${String(mm).padStart(2, '0')}/${dd}`
}

//轉換時間
export function formatTime(time) {
  return time.toLocaleTimeString('zh-tw', { hour12: false })
}

//轉換毫秒成小時
export function formatMsToH(ms) {
  const mH = (ms / 3600000).toFixed(1)
  if (mH.slice(3) === '0') {
    return mH.slice(0, 2) + 'h'
  }
  return mH + 'h'
}
