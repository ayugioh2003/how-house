<template>
  <div
    class="check-input flex-auto flex items-center px-8 cursor-pointer"
    @click="isDateModelOpen = true"
  >
    <i class="material-icons color-black mr-4">date_range</i>
    <client-only>
      <date-picker
        v-model="checkTimeRange"
        placeholder="CHECK-IN & CHECK-OUT"
        format="YYYY-MM-DD"
        value-type="format"
        range
        :disabled-date="disabledDate"
        :open.sync="isDateModelOpen"
      >
        <template v-slot:icon-calendar>
          <!-- <i class="material-icons color-black ml-auto">arrow_drop_down</i> -->
          <i></i>
        </template>
      </date-picker>
    </client-only>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  props: {
    disabledDate: {
      type: Function,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      isDateModelOpen: false,
    }
  },
  computed: {
    ...mapFields({
      checkTimeRange: 'rooms.checkTimeRange',
    }),
  },
}
</script>
