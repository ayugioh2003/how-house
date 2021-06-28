<template>
  <div
    class="check-input flex-auto flex items-center px-8 relative"
    :class="{ 'cursor-pointer': !disabled }"
    @click="!disabled ? (isModalOpen = !isModalOpen) : null"
  >
    <i class="material-icons color-black mr-4" style="padding-right: 10px;"
      >hotel</i
    >
    <span>
      <span v-if="checkRoom.name == undefined" class="text-gray-500">ROOM</span>
      <span v-else>{{ checkRoom.name }}</span>
    </span>

    <div v-if="isModalOpen" class="modal">
      <div
        v-for="room in rooms"
        :key="room.id"
        class="option"
        @click="checkRoomHandler(room)"
      >
        {{ room.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isModalOpen: false,
    }
  },
  computed: {
    ...mapFields({
      rooms: 'rooms.rooms',
      checkRoom: 'rooms.checkRoom',
    }),
  },
  methods: {
    checkRoomHandler(checkRoom) {
      this.$store.commit('rooms/SET_CHECK_ROOM', checkRoom)
      this.$store.dispatch('rooms/fetchRoom', this.checkRoom.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 100%;
  width: 300px;
  z-index: 1;

  .option {
    @apply border-gray-400 border-2;
    @apply bg-white;
    @apply h-16;
    @apply pl-1;

    &:not(:last-of-type) {
      @apply border-b-0;
    }
    &:hover {
      // color: #569DC3;
      @apply bg-secondary text-white;
      @apply cursor-pointer;
    }
  }
}
</style>
