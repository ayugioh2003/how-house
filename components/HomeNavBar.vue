<template>
  <nav class="fixed-bar flex">
    <Logo />

    <CheckInOut class="flex-auto"></CheckInOut>

    <CheckRoom class="flex-auto"></CheckRoom>
    <!-- <div class="check-input flex-auto flex items-center px-8">
      <i class="material-icons color-black mr-4">hotel</i>
    </div> -->

    <ReserveButton></ReserveButton>
    <!-- <button class="btn btn-secondary">RESERVE NOW</button> -->
  </nav>
</template>

<script>
// import { mapFields } from 'vuex-map-fields'
import CheckInOut from '@/components/CheckInOut.vue'
import CheckRoom from '@/components/CheckRoom.vue'

export default {
  components: {
    CheckInOut,
    CheckRoom,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.cell.active {
  color: red !important;
}
</style>
