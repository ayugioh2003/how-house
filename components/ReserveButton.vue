<template>
  <button class="btn btn-secondary" @click="reserveHandler">RESERVE NOW</button>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  computed: {
    ...mapFields({
      checkTimeRange: 'rooms.checkTimeRange',
      checkRoom: 'rooms.checkRoom',
      room: 'rooms.room',
    }),
    checkInDate() {
      return this.checkTimeRange[0]
    },
    checkOutDate() {
      if (this.checkTimeRange.length > 1) {
        return this.checkTimeRange[this.checkTimeRange.length - 1]
      } else {
        return this.checkTimeRange[0]
      }
    },
    selectDateRangeArray() {
      if (this.checkTimeRange.length === 0) return []
      if (this.checkTimeRange.some((item) => item === null)) return []

      const selectDateRange = this.$moment.range(
        this.checkInDate,
        this.checkOutDate
      )
      const selectDateRangeArray = Array.from(
        selectDateRange.by('day')
      ).map((m) => m.format('YYYY/MM/DD'))
      return selectDateRangeArray
    },
    bookedDates() {
      return this.room.booking.map((b) =>
        this.$moment(b.date).format('YYYY-MM-DD')
      )
    },
  },
  methods: {
    isDisabledDate(checkDate) {
      const isDateBooked = this.room.booking.some(
        (bookedObj) =>
          this.$moment(bookedObj.date).format('YYYY-MM-DD') ===
          this.$moment(checkDate).format('YYYY-MM-DD')
      )
      const isBeforeToday = this.$moment(checkDate).isSameOrBefore(
        this.$moment()
      )
      const isAfterNinetyDays = this.$moment(checkDate).isAfter(
        this.$moment().add(90, 'days')
      )

      const result = isDateBooked || isBeforeToday || isAfterNinetyDays
      return result
    },
    async reserveHandler() {
      if (
        this.checkTimeRange.length === 0 ||
        this.checkTimeRange.includes(null)
      ) {
        alert('Please select dates')
        return
      }
      if (Object.keys(this.checkRoom).length === 0) {
        alert('Please select room')
        return
      }
      // console.log('this.checkTimeRange', this.checkTimeRange)
      // console.log('this.checkRoom', this.checkRoom)

      // 取得 room 的 boooking
      console.log('this.checkRoom.id', this.checkRoom.id)
      try {
        await this.$store.dispatch('rooms/fetchRoom', this.checkRoom.id)
      } catch (error) {
        error({
          statusCode: 503,
          message: 'Unable to fetch room at this time, Please try again later.',
        })
        // eslint-disable-next-line no-console
        await console.error(error)
      }

      // 若選到無法選的日期，則重新選擇
      const isSomeDisabledDateSelected = this.selectDateRangeArray.some(
        (selectedDate) => this.isDisabledDate(selectedDate)
      )
      if (isSomeDisabledDateSelected) {
        alert('有部份日期無法選擇。請重新挑選')
        this.$store.commit('rooms/SET_CHECK_TIME_RANGE', [])
        return
      }

      // 跳轉頁面
      const routeName = this.$route.name

      if (routeName === 'index') {
        this.$router.push(`/room/${this.checkRoom.id}`)
      }
      if (routeName === 'room-id') {
        this.$router.push('/reservation')
      }
    },
  },
}
</script>
