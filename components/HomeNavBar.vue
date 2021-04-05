<template>
  <nav class="fixed-bar flex">
    <Logo />

    <CheckInOut class="flex-auto"></CheckInOut>

    <div class="check-input flex-auto flex items-center px-8">
      <i class="material-icons color-black mr-4">hotel</i>
    </div>

    <button class="btn btn-secondary">RESERVE NOW</button>
  </nav>
</template>

<script>
// import { mapFields } from 'vuex-map-fields'
import CheckInOut from '@/components/CheckInOut.vue'

export default {
  components: {
    CheckInOut,
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
