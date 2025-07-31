import { computed, ref } from 'vue'
import { formatDate, useDateTime } from './useDateTime'
import { useStatus } from './useAuth'

export function useCheckList() {
  const isCheck = ref(false)
  const todayCheck = ref(false)
  const { userId } = useStatus()
  const { newDate } = useDateTime()

  const userData = ref([[]])

  const checkList = ref(userData.value[userId.value])

  //檢查有無資料
  function historyCheck() {
    if (checkList.value.length) {
      if (formatDate(checkList.value[0].checkDate) === formatDate(newDate.value)) {
        console.log('有資料且同筆')
        return (isCheck.value = true)
      }
      return console.log('有資料')
    }
    return console.log('無資料')
  }

  //切換打卡狀態
  function toggleCheck() {
    isCheck.value = !isCheck.value
    isCheck.value ? addCheckTime() : addCheckOutTime()
  }

  //新增打卡簽到時間
  function addCheckTime() {
    const checkDate = newDate.value
    const checkOutTime = ref(null)
    const restTime = ref(1)
    const totalTime = computed(() => {
      if (!checkOutTime.value) {
        return null
      } else return checkOutTime.value - checkDate - restTime.value * 3600000
    })
    const remark = ref(null)
    checkList.value.unshift({
      checkDate,
      checkOutTime,
      restTime,
      totalTime,
      remark,
    })
  }

  //新增打卡簽退時間
  function addCheckOutTime() {
    const hasCheck = checkList.value.find(
      (check) => formatDate(check.checkDate) === formatDate(newDate.value),
    )
    if (hasCheck) {
      hasCheck.checkOutTime = newDate.value
    }
    todayCheck.value = true
  }

  return {
    toggleCheck,
    historyCheck,
    isCheck,
    todayCheck,
    checkList,
  }
}
export function updateTotalTime(check) {
  console.log('改變被觸發')
  console.log(check.totalTime)
}
