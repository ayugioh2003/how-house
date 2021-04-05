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
    }),
  },
  methods: {
    reserveHandler() {
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
      console.log('this.checkTimeRange', this.checkTimeRange)
      console.log('this.checkRoom', this.checkRoom)

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
