<template>
  <div class="check">
    <!-- <div class="check-input flex-auto">CHECK-in & CHECK-OUT</div> -->
    <CheckInOut
      :disabled="isDateDisabled"
      class="flex-auto border-gray-400 border-2 border-b-0"
    ></CheckInOut>
    <CheckRoom
      :disabled="isRoomDisabled"
      class="flex-auto border-gray-400 border-2 border-b-0"
    ></CheckRoom>
    <!-- <div class="check-input border-gray-400 border-2">ROOM</div> -->
    <!-- <button class="btn btn-secondary">RESERVE NOW</button> -->
    <ReserveButton></ReserveButton>
  </div>
</template>

<script>
import CheckInOut from '@/components/CheckInOut.vue'
import CheckRoom from '@/components/CheckRoom.vue'

export default {
  components: {
    CheckInOut,
    CheckRoom,
  },
  props: {
    isDateDisabled: {
      type: Boolean,
      default: false,
    },
    isRoomDisabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.check {
  width: 350px;
  @apply bg-white;
}
</style>
