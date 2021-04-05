<template>
  <div
    class="check-input flex-auto flex items-center px-8 cursor-pointer relative"
    @click="isModalOpen = !isModalOpen"
  >
    <i class="material-icons color-black mr-4" style="padding-right: 10px;"
      >hotel</i
    >
    <span>
      <span class="text-gray-500">ROOM STYLE</span>
    </span>

    <div v-if="isModalOpen" class="modal">
      <div
        v-for="room in rooms"
        :key="room.id"
        class="option"
        @click="clickHandler(room)"
      >
        {{ room.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  data() {
    return {
      isModalOpen: false,
      selectedRoom: {},
    }
  },
  computed: {
    ...mapFields({
      rooms: 'rooms.rooms',
      // checkRoom: 'rooms.checkRoom',
    }),
  },
  methods: {
    clickHandler(selectedRoom) {
      this.$router.push(`/room/${selectedRoom.id}`)
      // this.$store.commit('rooms/checkRoom', checkRoom)
      // console.log('checkRoom', checkRoom)
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
