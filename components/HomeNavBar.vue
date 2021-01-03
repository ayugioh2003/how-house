<template>
  <nav class="fixed-bar flex">
    <Logo />

    <div
      class="check-input flex-auto flex items-center px-8"
      @click="isDateModelOpen = true"
    >
      <i class="material-icons color-black mr-4">date_range</i>
      <client-only>
        <date-picker
          v-model="checkTimeRange"
          placeholder="CHECK-IN & CHECK-OUT"
          format="YYYY-MM-DD"
          range
          :open.sync="isDateModelOpen"
        >
          <template v-slot:icon-calendar>
            <i class="material-icons color-black ml-auto">arrow_drop_down</i>
          </template>
        </date-picker>
      </client-only>
    </div>

    <div class="check-input flex-auto flex items-center px-8">
      <i class="material-icons color-black mr-4">hotel</i>
    </div>

    <button class="btn btn-secondary">RESERVE NOW</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isDateModelOpen: true,
      checkTimeRange: null,
    }
  },
}
</script>

<style lang="scss">
.cell.active {
  color: red !important;
}
</style>
