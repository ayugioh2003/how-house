<template>
  <nav class="navbar flex mb-10">
    <Logo />
    <!-- <div class="check-input flex-auto">ROOM STYLE</div> -->
    <RoomStyle class="ml-auto"></RoomStyle>
  </nav>
</template>

<script>
import RoomStyle from '@/components/RoomStyle.vue'

export default {
  components: {
    RoomStyle,
  },
}
</script>
